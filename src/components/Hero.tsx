
import { motion } from 'framer-motion'

const socials = [
  {
    label: 'X',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
]

export default function Hero() {
  return (
    <section
      id="product"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: 0,
        overflow: 'hidden',
        background: '#061b1c',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/hero.mp4"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.14)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.48), transparent 75%), linear-gradient(0deg, rgba(0,0,0,0.28), transparent 35%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          padding: '110px 5vw 100px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            width: 'fit-content',
            padding: '7px 16px 7px 7px',
            borderRadius: 50,
            background: 'rgba(255,255,255,0.09)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{ display: 'flex' }}>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                style={{
                  width: 22,
                  height: 22,
                  marginLeft: item === 1 ? 0 : -8,
                  borderRadius: '50%',
                  background: '#10a879',
                  border: '2px solid #063c39',
                }}
              />
            ))}
          </div>

          <span style={{ color: '#eee', fontSize: 13 }}>
            We're trusted by <strong>teams worldwide</strong>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            marginTop: 26,
            maxWidth: 650,
            color: '#fff',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(42px, 5.5vw, 76px)',
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: '-3px',
          }}
        >
          Design That
          <br />
          Lights the Way
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          style={{
            marginTop: 20,
            maxWidth: 380,
            color: 'rgba(255,255,255,0.76)',
            fontSize: 15,
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Aurora helps modern brands craft interfaces that feel effortless and alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            marginTop: 30,
          }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              padding: '15px 27px',
              borderRadius: 50,
              background: '#090909',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Get Started
          </motion.a>

          <motion.a
            href="#work"
            aria-label="Watch demo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: 46,
              height: 46,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <div
        style={{
          position: 'absolute',
          zIndex: 3,
          bottom: 28,
          left: '5vw',
          display: 'flex',
          gap: 12,
        }}
      >
        {socials.map((social) => (
          <a
            key={social.label}
            href="#"
            aria-label={social.label}
            style={{
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d={social.path} />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}
