
import { useState } from "react"
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import user from "../../assets/images/icon-7797704_640.png";
import { logOut } from "../../services/auth";
import { setLogout } from "../../redux/authSlice";

export default function Navbar({role}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  console.log("role",role);
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f1f4f2] dark:border-[#eaf3ee44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Nav Links */}
          <div className="flex items-center gap-12">
            <a className="flex items-center gap-3 group" href="#">
              <div className="size-8 bg-[#4ec692] rounded-lg flex items-center justify-center text-white">
                <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#f4f5f5" }}
                />
              </div>
              <span className="text-[#191B32] font-bold tracking-tight text-lg sm:text-xl">
              CareerStack
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                className="text-[#191B32] text-sm font-medium hover:text-[#191B32] transition-colors"
                href="#"
              >
                Home
              </a>
              <a
                className=" text-[#9295A3]  text-sm font-medium hover:text-[#191B32] transition-colors"
                href="#"
              >
                Courses
              </a>
              <a
                className="text-[#9295A3] text-sm font-medium hover:text-[#191B32] transition-colors"
                href="#"
              >
                Mentors
              </a>
              <a
                className="text-[#9295A3] text-sm font-medium hover:text-[#191B32] transition-colors"
                href="#"
              >
                Blog
              </a>
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-6">
           
            <div className="flex items-center gap-3 min-h-[48px]">
  {role === "student" ? (
    /* Student View → Show Profile Icon */
    <button onClick={()=>{logOut()
     dispatch(setLogout())
     navigate("/student/auth")
    }}>
      <img
        src={user}

        alt="User"
        className="w-6 h-6 rounded-full object-cover border border-gray-300 cursor-pointer"
      />
    </button>
  ) : (
    /* Guest View → Show Auth Buttons */
    <>
      <Link to="/student/auth">
        <button className="hidden sm:flex px-5 py-2.5 text-sm font-bold text-gray-900 dark:text-white bg-[#4ec692] hover:bg-gray-100 dark:hover:bg-[#9BA1FF] rounded-lg transition-colors">
          Login
        </button>
      </Link>

      <Link to="/student/auth">
        <button className="hidden sm:flex px-5 py-2.5 text-sm font-bold text-white bg-[#4ec692] hover:bg-[#4ec692] rounded-lg shadow-lg shadow-green-500/30 transition-all transform hover:-translate-y-0.5">
          Sign Up
        </button>
      </Link>
    </>
  )}
</div>


            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1e2623] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-[#4ec692] "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

         {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Right-side slide-out navbar */}
        <div
          className={`fixed top-0 right-0 h-50 w-40 bg-white border-l border-[#f1f4f2]  shadow-lg z-50 md:hidden transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full hidden"
          }`}
        >
          {/* Close button on the right side */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-[#f1f4f2] ">
            <span className="text-gray-900 text-sm font-semibold">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1 rounded-lg  dark:hover:bg-[#1e2623] transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-gray-900 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col  bg-white gap-2 px-2 py-4">
            <a
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-900 dark:text-gray-200 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1e2623] rounded-lg transition-colors cursor-pointer"
              href="#"
            >
              Home
            </a>

            <a
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1e2623] rounded-lg transition-colors cursor-pointer"
              href="#"
            >
              Courses
            </a>

            <a
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1e2623] rounded-lg transition-colors cursor-pointer"
              href="#"
            >
              Mentors
            </a>

            <a
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:bg-gray-100 dark:hover:bg-[#1e2623] rounded-lg transition-colors cursor-pointer"
              href="#"
            >
              Blog
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
