'use client'
import { motion } from 'framer-motion'

export default function MuzuRing({
  size = 260,
  color = "#F5A623",
  glow = "rgba(245,166,35,0.16)",
  glowSoft = "rgba(245,166,35,0.07)",
  echo = "rgba(245,166,35,0.15)"
}: {
  size?: number;
  color?: string;
  glow?: string;
  glowSoft?: string;
  echo?: string;
}) {
  const cx = size / 2
  const cy = size / 2

  // Ring geometry
  const ringR       = size * 0.42
  const ringStroke  = size * 0.14
  const ringInnerEdge = ringR - ringStroke / 2
  const ringOuterEdge = ringR + ringStroke / 2

  // Eyes — smaller, sitting slightly above center
  const eyeR = size * 0.072
  const eyeY = cy - size * 0.075
  const eyeX = size * 0.13

  // Grille — radial lines punched through the amber ring at the bottom arc
  const grilleCount = 13
  const stepDeg = 3.8 // significantly reduced gap from 15 deg
  const startAngle = 90 - ((grilleCount - 1) / 2) * stepDeg // centered at 90 deg (bottom)
  const grilleLines = Array.from({ length: grilleCount }, (_, i) => {
    const angleDeg = startAngle + i * stepDeg
    const rad = angleDeg * (Math.PI / 180)
    // Add margin so lines do not touch the inner or outer edges of the ring
    const rMargin = ringStroke * 0.22
    const r1 = ringInnerEdge + rMargin
    const r2 = ringOuterEdge - rMargin
    return {
      x1: cx + r1 * Math.cos(rad),
      y1: cy + r1 * Math.sin(rad),
      x2: cx + r2 * Math.cos(rad),
      y2: cy + r2 * Math.sin(rad),
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ position: 'relative', width: size, height: size }}
    >
      {/* Ambient glow behind ring */}
      <motion.div
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: '-20%',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

        {/* 1: Dark fill inside the ring */}
        <circle cx={cx} cy={cy} r={ringInnerEdge} fill="#1C1C1E" />

        {/* 2: Full solid amber ring */}
        <motion.circle
          cx={cx} cy={cy} r={ringR}
          fill="none"
          stroke={color}
          strokeWidth={ringStroke}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />

        {/* 3: Thin outer echo ring */}
        <circle
          cx={cx} cy={cy} r={ringOuterEdge + size * 0.02}
          fill="none"
          stroke={echo}
          strokeWidth={1.5}
        />

        {/* 4: Grille lines — dark, drawn ON TOP of amber ring to punch through */}
        {grilleLines.map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1} y1={line.y1}
            x2={line.x2} y2={line.y2}
            stroke="#1C1C1E"
            strokeWidth={size * 0.013}
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.04, duration: 0.2 }}
          />
        ))}

        {/* 5: Left eye */}
        <motion.circle
          cx={cx - eyeX} cy={eyeY} r={eyeR}
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${cx - eyeX}px ${eyeY}px` }}
        />

        {/* 6: Right eye */}
        <motion.circle
          cx={cx + eyeX} cy={eyeY} r={eyeR}
          fill={color}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.82, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ transformOrigin: `${cx + eyeX}px ${eyeY}px` }}
        />
      </svg>

      {/* Breathing pulse ring */}
      <motion.div
        animate={{
          boxShadow: [
            `0 0 0 0px rgba(0,0,0,0)`,
            `0 0 0 14px ${glowSoft}`,
            `0 0 0 0px rgba(0,0,0,0)`,
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}
