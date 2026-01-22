
export default function StatsSection() {
  const stats = [
    { value: "10k+", label: "Active Students" },
    { value: "500+", label: "Expert Mentors" },
    { value: "1.2k", label: "Premium Courses" },
    { value: "4.9", label: "Average Rating" },
  ]

  return (
    <section className="py-6 md:py-10 bg-white  border-y border-[#f1f4f2] dark:border-[#f3f5f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center p-3 md:p-4 ${
                index > 0 ? "border-l border-[#f1f4f2] dark:border-[#d0d5d3]" : ""
              }`}
            >
              <p className="text-xl md:text-3xl lg:text-4xl font-black text-[#191B32] mb-1 md:mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm lg:text-base font-medium text-[#9295A3] dark:text-[#9295A3]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
