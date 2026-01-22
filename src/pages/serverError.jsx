
import { useEffect, useState } from 'react'


export default function ServerErrorPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Animated image */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          } mb-8`}
        >
        </div>

        {/* Animated number */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        >
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#FF7648] via-[#9BA1FF] to-[#4ec692] bg-clip-text text-transparent mb-4">
            500
          </div>
        </div>

        {/* Animated title */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Server Error
          </h1>
        </div>

        {/* Animated description */}
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="text-lg mb-8 max-w-md mx-auto leading-relaxed" style={{ color: '#9295A3' }}>
            Something went wrong on our end. Our team has been notified and is working to fix this issue.
          </p>
        </div>

        {/* Animated loading bars */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="flex justify-center gap-1 mb-8">
            <div className="w-1 h-8 bg-gradient-to-t rounded-full animate-pulse" style={{ background: 'linear-gradient(to top, #FF7648, #9BA1FF)' }} />
            <div className="w-1 h-8 bg-gradient-to-t rounded-full animate-pulse delay-100" style={{ background: 'linear-gradient(to top, #FF7648, #9BA1FF)' }} />
            <div className="w-1 h-8 bg-gradient-to-t rounded-full animate-pulse delay-200" style={{ background: 'linear-gradient(to top, #FF7648, #9BA1FF)' }} />
            <div className="w-1 h-8 bg-gradient-to-t rounded-full animate-pulse delay-300" style={{ background: 'linear-gradient(to top, #FF7648, #9BA1FF)' }} />
          </div>
        </div>

        {/* Animated buttons */}
        <div
          className={`transform transition-all duration-1000 delay-500 flex flex-col sm:flex-row gap-4 justify-center ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
  
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 border"
            style={{ backgroundColor: 'transparent', borderColor: '#4ec692', color: '#4ec692' }}
          >
              Go Home
          </button>
        </div>


      </div>
    </div>
  )
}
