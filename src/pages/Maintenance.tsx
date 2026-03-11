import { useEffect, useRef } from 'react'

function BackgroundDeco() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Decorative circles */}
      {[
        { size: 500, top: "-15%", right: "-10%", opacity: 0.04 },
        { size: 350, bottom: "-10%", left: "-8%",  opacity: 0.04 },
        { size: 200, top: "40%",   left: "5%",    opacity: 0.03 },
        { size: 160, top: "15%",   right: "20%",  opacity: 0.03 },
      ].map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: c.size,
            height: c.size,
            top: c.top,
            bottom: c.bottom,
            left: c.left,
            right: c.right,
            border: `1px solid rgba(201,168,76,${c.opacity * 8})`,
            background: `radial-gradient(circle, rgba(201,168,76,${c.opacity}) 0%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}

function GearIllustration() {
    const outerRef = useRef(null);
    const innerRef = useRef(null);
    const angleRef = useRef(0);
    const rafRef   = useRef(null);

    useEffect(() => {
        let last: number | null = null;

        function tick(ts: number): void {
            if (last !== null) {
            const delta = ts - last;
            angleRef.current += delta * 0.02;
            if (outerRef.current) outerRef.current.style.transform = `rotate(${angleRef.current}deg)`;
            if (innerRef.current) innerRef.current.style.transform = `rotate(${-angleRef.current * 1.4}deg)`;
            }
            last = ts;
            rafRef.current = requestAnimationFrame(tick);
        }

        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current!);
        }, []);

  return (
    <div className="relative flex items-center justify-center mb-10 w-36 h-36">
      {/* Outer ring */}
      <div ref={outerRef} className="absolute" style={{ willChange: "transform" }}>
        <svg width="144" height="144" viewBox="0 0 144 144" fill="none">
          <path
            d="M72 20 L78 4 L66 4 Z M72 124 L78 140 L66 140 Z M20 72 L4 78 L4 66 Z M124 72 L140 78 L140 66 Z
               M30 30 L20 15 L15 20 L30 30 Z M114 114 L124 129 L129 124 Z
               M30 114 L15 124 L20 129 Z M114 30 L129 20 L124 15 Z"
            fill="rgba(201,168,76,0.12)"
            stroke="rgba(201,168,76,0.28)"
            strokeWidth="1"
          />
          <circle cx="72" cy="72" r="54" stroke="rgba(201,168,76,0.18)" strokeWidth="1.5" fill="none" strokeDasharray="7 5" />
        </svg>
      </div>

      {/* Inner ring */}
      <div ref={innerRef} className="absolute" style={{ willChange: "transform" }}>
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
          <path
            d="M45 12 L50 2 L40 2 Z M45 78 L50 88 L40 88 Z M12 45 L2 50 L2 40 Z M78 45 L88 50 L88 40 Z
               M20 20 L11 9 L9 11 L20 20 Z M70 70 L79 81 L81 79 Z
               M20 70 L9 79 L11 81 Z M70 20 L81 11 L79 9 Z"
            fill="rgba(201,168,76,0.08)"
            stroke="rgba(201,168,76,0.22)"
            strokeWidth="1"
          />
          <circle cx="45" cy="45" r="32" stroke="rgba(201,168,76,0.13)" strokeWidth="1" fill="none" strokeDasharray="5 4" />
        </svg>
      </div>

      {/* Center icon */}
      <div
        className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center"
        style={{ background: "rgba(201,168,76,0.11)", border: "1px solid rgba(201,168,76,0.3)" }}
      >
        <IconSettings size={26} />
      </div>
    </div>
  );
}

const IconRefresh = ({ size = 15 }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="23 4 23 10 17 10" />
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
  </svg>
);

const IconSettings = ({ size = 24 }) => (
  <svg width={size} height={size} fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

function Maintenance() {
    return (
        <>
            {/* Google Fonts + keyframes */}
            <style>{`
                @keyframes shimmer {
                0%   { transform: translateX(-100%); }
                100% { transform: translateX(400%);  }
                }
                @keyframes dropIn {
                from { opacity: 0; transform: translateY(-6px) scale(0.98); }
                to   { opacity: 1; transform: translateY(0)    scale(1);    }
                }
                @keyframes fadeSlideUp {
                from { opacity: 0; transform: translateY(16px); }
                to   { opacity: 1; transform: translateY(0);    }
                }
                @keyframes pulseDot {
                0%, 100% { opacity: 1;   transform: scale(1);    }
                50%       { opacity: 0.4; transform: scale(0.75); }
                }

                .anim-1 { animation: fadeSlideUp 0.45s 0.05s ease both; }
                .anim-2 { animation: fadeSlideUp 0.45s 0.18s ease both; }
                .anim-3 { animation: fadeSlideUp 0.45s 0.30s ease both; }
                .anim-4 { animation: fadeSlideUp 0.45s 0.42s ease both; }
                .anim-5 { animation: fadeSlideUp 0.45s 0.54s ease both; }

                .pulse-dot { animation: pulseDot 2s infinite; }
            `}</style>
            <div className='flex flex-col overflow-hidden bg-brand h-screen w-screen fixed'>
                <main className="flex-1 relative flex items-center justify-center px-5 py-16 overflow-hidden" >
                    <BackgroundDeco />

                    <div className="relative z-10 w-full max-w-lg flex flex-col items-center text-center">

                        {/* Gears */}
                        <div className="anim-1">
                            <GearIllustration />
                        </div>

                        {/* Heading */}
                        <div className="anim-2 mb-8">
                            <h1 className="text-white leading-tight mb-4" style={{ fontFamily: '"DM Serif Display", serif', fontSize: "clamp(2rem, 5vw, 3rem)" }}>
                                We'll be back{" "}
                                <span style={{ color: "#C9A84C" }}>shortly.</span>
                            </h1>
                            <p className="mx-auto leading-relaxed max-w-md" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>
                                The Event Registration Portal is currently undergoing scheduled maintenance.
                                We're making improvements to serve you better. Please check back soon.
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full" style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

                        {/* Actions */}
                        <div className="anim-5 flex flex-col sm:flex-row items-center gap-3 mt-8">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center gap-2 rounded-lg font-semibold transition-colors"
                                style={{
                                padding: "10px 22px",
                                fontSize: "0.875rem",
                                background: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.7)",
                                cursor: "pointer",
                                fontFamily: '"DM Sans", sans-serif',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
                            >
                                <IconRefresh />
                                Try Again
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        </>
    )
}

export default Maintenance