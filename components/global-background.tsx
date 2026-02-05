"use client"

export function GlobalBackground() {
  // Deterministic positions for particles
  const particles = [
    { x: 10, y: 20, size: 5, duration: 25, delay: 0 },
    { x: 85, y: 15, size: 4, duration: 30, delay: 2 },
    { x: 45, y: 70, size: 6, duration: 28, delay: 5 },
    { x: 20, y: 80, size: 4, duration: 22, delay: 8 },
    { x: 70, y: 40, size: 5, duration: 26, delay: 3 },
    { x: 5, y: 50, size: 4, duration: 32, delay: 10 },
    { x: 90, y: 60, size: 6, duration: 24, delay: 1 },
    { x: 35, y: 25, size: 5, duration: 29, delay: 6 },
    { x: 60, y: 85, size: 4, duration: 27, delay: 4 },
    { x: 15, y: 35, size: 5, duration: 31, delay: 7 },
    { x: 80, y: 75, size: 6, duration: 23, delay: 9 },
    { x: 50, y: 10, size: 4, duration: 28, delay: 11 },
    { x: 25, y: 55, size: 5, duration: 25, delay: 2 },
    { x: 95, y: 30, size: 4, duration: 30, delay: 5 },
    { x: 40, y: 90, size: 6, duration: 26, delay: 8 },
    { x: 75, y: 5, size: 5, duration: 24, delay: 0 },
    { x: 55, y: 45, size: 4, duration: 29, delay: 3 },
    { x: 8, y: 65, size: 5, duration: 27, delay: 6 },
    { x: 65, y: 20, size: 6, duration: 31, delay: 1 },
    { x: 30, y: 75, size: 4, duration: 22, delay: 4 },
    { x: 88, y: 50, size: 5, duration: 28, delay: 7 },
    { x: 12, y: 8, size: 4, duration: 25, delay: 10 },
    { x: 72, y: 92, size: 6, duration: 30, delay: 9 },
    { x: 48, y: 38, size: 5, duration: 26, delay: 11 },
    { x: 3, y: 88, size: 4, duration: 24, delay: 2 },
  ]

  return (
    <div className="fixed inset-0 -z-10 bg-primary overflow-hidden">
      {/* Primary moving gradient blurs - very vibrant */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute w-[800px] h-[800px] bg-blue-600 rounded-full blur-3xl"
          style={{ animation: 'float1 20s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[900px] h-[900px] bg-indigo-600 rounded-full blur-3xl"
          style={{ animation: 'float2 25s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[700px] h-[700px] bg-cyan-500 rounded-full blur-3xl"
          style={{ animation: 'float3 18s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[600px] h-[600px] bg-violet-600 rounded-full blur-3xl"
          style={{ animation: 'float4 22s ease-in-out infinite' }}
        />
      </div>

      {/* Secondary layer - pulsing glow spots */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-[400px] h-[400px] bg-sky-400 rounded-full blur-2xl"
          style={{ animation: 'pulse1 8s ease-in-out infinite, float5 30s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[350px] h-[350px] bg-purple-500 rounded-full blur-2xl"
          style={{ animation: 'pulse2 6s ease-in-out infinite, float6 25s ease-in-out infinite' }}
        />
        <div
          className="absolute w-[300px] h-[300px] bg-teal-400 rounded-full blur-2xl"
          style={{ animation: 'pulse1 7s ease-in-out infinite, float7 28s ease-in-out infinite' }}
        />
      </div>

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Floating particles that wander randomly */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20 blur-[1px]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `wander${(i % 5) + 1} ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0%, 0%); }
          25% { transform: translate(30%, 20%); }
          50% { transform: translate(60%, 40%); }
          75% { transform: translate(30%, 60%); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(100%, 80%); }
          25% { transform: translate(70%, 50%); }
          50% { transform: translate(40%, 30%); }
          75% { transform: translate(70%, 60%); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(80%, 20%); }
          33% { transform: translate(40%, 60%); }
          66% { transform: translate(20%, 40%); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(20%, 70%); }
          50% { transform: translate(70%, 30%); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(50%, 10%); }
          50% { transform: translate(20%, 80%); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(90%, 50%); }
          33% { transform: translate(30%, 20%); }
          66% { transform: translate(60%, 70%); }
        }
        @keyframes float7 {
          0%, 100% { transform: translate(10%, 60%); }
          50% { transform: translate(80%, 30%); }
        }
        @keyframes pulse1 {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes wander1 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(40px, -30px); }
          50% { transform: translate(-15px, 35px); }
          75% { transform: translate(-35px, -20px); }
        }
        @keyframes wander2 {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(-30px, 40px); }
          50% { transform: translate(35px, 15px); }
          75% { transform: translate(20px, -35px); }
        }
        @keyframes wander3 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(30px, 30px); }
          66% { transform: translate(-40px, -15px); }
        }
        @keyframes wander4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-35px, 40px); }
        }
        @keyframes wander5 {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(25px, -35px); }
          40% { transform: translate(-30px, -15px); }
          60% { transform: translate(-15px, 30px); }
          80% { transform: translate(35px, 20px); }
        }
      `}</style>
    </div>
  )
}
