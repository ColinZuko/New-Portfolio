import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'contact']
const TURN = 90 // px before/after a section edge where the line swings to the other side

// Indiana Jones-style map route in <main>'s pixel space: down one side margin, swing across
// at every section edge, and finally curve in to the middle of Contact, where the X marks the spot.
function buildRoute(main) {
  const w = main.offsetWidth
  const margin = Math.max(12, (w - 1024) / 4) // middle of the empty side margin, 12px on phones
  const xs = [margin, w - margin]
  const tops = SECTIONS.map((id) => document.getElementById(id).offsetTop)
  let side = 0
  let d = `M ${xs[0]} 90`
  for (let i = 1; i < tops.length; i++) {
    const edge = tops[i]
    const x = xs[side]
    d += ` L ${x} ${edge - TURN}`
    if (i === tops.length - 1) {
      const end = { x: w / 2, y: edge + 40 }
      d += ` C ${x} ${end.y} ${x} ${end.y} ${end.x} ${end.y}`
      return { d, end, w, h: main.offsetHeight }
    }
    side = 1 - side
    d += ` C ${x} ${edge} ${xs[side]} ${edge} ${xs[side]} ${edge + TURN}`
  }
}

const RouteLine = () => {
  const svgRef = useRef(null)
  const pathRef = useRef(null)
  const samples = useRef([]) // [length along the path, y at that length], y only ever grows
  const [route, setRoute] = useState(null)
  const reduce = useReducedMotion()

  const { scrollY } = useScroll()
  const draw = useMotionValue(0) // 0..1 share of the route that should be drawn
  const smooth = useSpring(draw, { stiffness: 70, damping: 20 })
  const headX = useMotionValue(0)
  const headY = useMotionValue(0)
  const headOpacity = useTransform(smooth, [0.985, 1], [1, 0])
  const xOpacity = useTransform(smooth, [0.985, 1], [0, 1])

  // Rebuild the route whenever the page changes size (resize, images loading, fonts)
  useEffect(() => {
    const main = svgRef.current.parentElement
    const rebuild = () => setRoute(buildRoute(main))
    const ro = new ResizeObserver(rebuild)
    ro.observe(main)
    return () => ro.disconnect()
  }, [])

  // The head of the line follows a point 60% down the screen
  const update = () => {
    const s = samples.current
    if (!s.length) return
    const main = svgRef.current.parentElement
    const target = window.scrollY + window.innerHeight * 0.6 - main.offsetTop
    let lo = 0
    let hi = s.length - 1
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1
      if (s[mid][1] <= target) lo = mid
      else hi = mid - 1
    }
    draw.set(s[lo][0] / s[s.length - 1][0])
  }
  useMotionValueEvent(scrollY, 'change', update)

  useEffect(() => {
    if (!route) return
    const path = pathRef.current
    const total = path.getTotalLength()
    const s = []
    for (let l = 0; l < total; l += 4) s.push([l, path.getPointAtLength(l).y])
    s.push([total, route.end.y])
    samples.current = s
    update()
  }, [route]) // eslint-disable-line react-hooks/exhaustive-deps

  useMotionValueEvent(smooth, 'change', (v) => {
    const path = pathRef.current
    if (!path) return
    const p = path.getPointAtLength(v * path.getTotalLength())
    headX.set(p.x)
    headY.set(p.y)
  })

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      width={route?.w}
      height={route?.h}
      className="pointer-events-none absolute left-0 top-0 z-10 text-primary"
    >
      {route && (
        <>
          {/* the whole route, faint and dotted, like a trail printed on the map */}
          <path
            ref={pathRef}
            d={route.d}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.25}
            strokeWidth={2}
            strokeDasharray="1 9"
            strokeLinecap="round"
          />
          {/* the part you've travelled */}
          <motion.path
            d={route.d}
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            style={{ pathLength: reduce ? 1 : smooth }}
          />
          {!reduce && (
            <motion.g style={{ opacity: headOpacity }}>
              <motion.circle cx={headX} cy={headY} r={11} fill="currentColor" fillOpacity={0.25} />
              <motion.circle cx={headX} cy={headY} r={6} fill="currentColor" />
            </motion.g>
          )}
          <motion.path
            d={`M ${route.end.x - 9} ${route.end.y - 9} l 18 18 m 0 -18 l -18 18`}
            stroke="currentColor"
            strokeWidth={4}
            strokeLinecap="round"
            style={{ opacity: reduce ? 1 : xOpacity }}
          />
        </>
      )}
    </svg>
  )
}

export default RouteLine
