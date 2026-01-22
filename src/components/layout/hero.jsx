




export default function HeroSection() {
  return (
    <section
      className="relative pt-6 sm:pt-12 pb-12 sm:pb-20 lg:pt-10 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: "#f6f8f7" }}
    >
      {/* Background Elements */}
      <div
        className="absolute top-20 right-0 -z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-3xl opacity-60"
        style={{ backgroundColor: "rgba(155, 161, 255, 0.1)" }}
      ></div>
      <div
        className="absolute bottom-0 left-0 -z-10 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full blur-3xl opacity-60"
        style={{ backgroundColor: "rgba(255, 118, 72, 0.1)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-start gap-3 sm:gap-6 max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: "rgba(155, 161, 255, 0.15)", color: "#9BA1FF" }}
            >
              <span>⚡</span>
              New Platform V1.0
            </div>

            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.15] tracking-tight"
              style={{ color: "#191B32" }}
            >
              Master New Skills from{" "}
              <span className="relative whitespace-nowrap" style={{ color: "#4ec692" }}>
                Top Mentors
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 sm:h-3 -z-10"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path d="M0 5 Q 50 10 100 5" fill="none" stroke="#9BA1FF" strokeWidth="8" opacity="0.3"></path>
                </svg>
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg" style={{ color: "#9295A3" }}>
              Unlock your potential with our comprehensive curriculum. Join a community of learners and get direct
              guidance from industry experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
              <button
                className="px-5 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-white"
                style={{ backgroundColor: "#4ec692" }}
              >
                Start Learning
                <span>→</span>
              </button>
              <button
                className="px-5 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-base font-bold rounded-xl hover:border-2 transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: "#f6f8f7", color: "#191B32", border: "1px solid #9295A3" }}
              >
                <span>▶</span>
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div
              className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4 text-xs sm:text-sm"
              style={{ color: "#9295A3" }}
            >
              <div className="flex -space-x-3">
                <img
                  alt="Student portrait"
                  className="w-7 sm:w-10 h-7 sm:h-10 rounded-full border-2"
                  style={{ borderColor: "#f6f8f7" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnxzlcj8sDM7vpelm3Ejzrtj1tXRdNgbLIgb5HzBoDXpj7dBhEJpQqINCxfZysTADPOUjWm71y4_tPDwzS_zyfgpW-kOrIAAAB4XvcCWork6cC4kWs-1Hnr3M6awnJGYhMOz09k9tQGaHE5tje69pSGYDglqgoiW-PAbk5_P4bQFcByWIOqbqGoCmItUkI1LH_C7vernon-Em_CVhIqhzC6wShWUGJcgYcicv0IzQabFtM3wwSXLQDkO1ozeJHh8fTlFZ1hMgbeLZAC0y_-"
                />
                <img
                  alt="Student portrait"
                  className="w-7 sm:w-10 h-7 sm:h-10 rounded-full border-2"
                  style={{ borderColor: "#f6f8f7" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZMOesFfVuraaPM3Don4eMJ73AMiZAWn9dR7_AzyJT8jvisB4IFMru-x7xC2L3djAfR5fyqYTFKtbVfeNNgObDHLjVc8HSB4CbkpLLgOUAgBP-sA7U1BS88yXn-X-HnnMvxV7Oz0fDaKHSLePNtm2i8l4jrJAqgVBzH0Q0Jvd0nagUToWHE6sN29KJuR9v6HWbCeX-Em_CVhIqhzC6wShWUGJcgYcicv0IzQabFtM3wwSXLQDkO1ozeJHh8fTlFZ1hMgbeLZAC0y_-"
                />
                <img
                  alt="Student portrait"
                  className="w-7 sm:w-10 h-7 sm:h-10 rounded-full border-2"
                  style={{ borderColor: "#f6f8f7" }}
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjgKjBwEkNprnizZX7cshVg6kQad9neiEInHuXJhMOQMtbjizkHjITdigub6HuFsPJ7um9-qlT4wRtUYw8GNUOnjE4BbLrtsYPwHqMajfrQF47xwTIIzkmPJWNQhY82kILDuk0AcCarqIkbGoVpzt0EiNvZG3sCvyhBGCmiRtSY6wJlInsp1546BgiF-Zm_0juYfqq1A5NOtjSSHkaWtLfhqAGHgBQtp-dHJXODuQJVyG2kTwUiXS7RpktUgS76galJAUgNcNegKlI"
                />
                <div
                  className="w-7 sm:w-10 h-7 sm:h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: "#9BA1FF", borderColor: "#f6f8f7" }}
                >
                  +2k
                </div>
              </div>
              <p>Trusted by 10,000+ students</p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-full min-h-[250px] sm:min-h-[400px] flex items-center justify-center lg:justify-end">
            <div
              className="relative z-10 w-full max-w-[350px] sm:max-w-[500px] aspect-[4/3] rounded-lg sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-2xl transition-all duration-500 hover:scale-105"
              style={{ backgroundColor: "#ffffff", border: "1px solid #e0e0e0" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKqdFpQfW533swfOVn5i7SjQP7y32jl0M6xznQERZXDw9h60Beji0iDas8fsFdHGOyrVheNEIZzW-zfR8wz8AxMWOazdTjlRhihP_grxjA864N2So1C76VaMRRVhqbGtQ86DL45uwAtnbE-DVB1EIq0N1Hq5KRetDi47MUnjExeqx4bRsokzu_-GLgVSjWTc8WBxWiiv3TRxu83YNgv3-S-WrTrVvovfpnB4WDy8KpNBXSyIaV9ixbjiWqvLJzBeWwUAtUvl3JKMqU')`,
                }}
              ></div>

              {/* Floating Badge */}
              <div
                className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 p-2 sm:p-4 rounded-lg sm:rounded-xl shadow-lg flex items-center gap-2 sm:gap-4 max-w-[160px] sm:max-w-[200px] animate-bounce"
                style={{ animationDuration: "3s", backgroundColor: "#ffffff", border: "1px solid #e0e0e0" }}
              >
                <div
                  className="w-7 sm:w-10 h-7 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base flex-shrink-0"
                  style={{ backgroundColor: "rgba(78, 198, 146, 0.1)", color: "#4ec692" }}
                >
                  ✓
                </div>
                <div>
                  <p className="text-xs font-medium" style={{ color: "#9295A3" }}>
                    Course Completed
                  </p>
                  <p className="text-xs sm:text-sm font-bold" style={{ color: "#191B32" }}>
                    UX Design Basics
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative shapes */}
            <div
              className="absolute -top-6 -right-6 w-12 sm:w-24 h-12 sm:h-24 rounded-full opacity-20 blur-xl"
              style={{ backgroundColor: "#FF7648" }}
            ></div>
            <div
              className="absolute -bottom-8 -left-8 w-16 sm:w-32 h-16 sm:h-32 rounded-full opacity-20 blur-xl"
              style={{ backgroundColor: "#4ec692" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
