import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Icon = () => {
  return (
    <>
      <a className="flex items-center gap-3 group" href="#">
              <div className="size-8 bg-[#4ec692] rounded-lg flex items-center justify-center text-white">
                <FontAwesomeIcon
                icon={faGraduationCap}
                style={{ color: "#f4f5f5" }}
                />
              </div>
              <span className="text-[#191B32] text-xl font-bold tracking-tight">
                CareerStack
              </span>
            </a>
    </>
  )
}

export default Icon
