import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
          animate-spin
          rounded-full
          w-10 h-10
          md:w-16 md:h-16
          lg:w-20 lg:h-20
        "
        style={{
          background: `conic-gradient(
            #4ec692,
            #9BA1FF,
            #FF7648,
            #4ec692
          )`,
          mask: "radial-gradient(farthest-side, transparent 60%, #000 61%)",
          WebkitMask:
            "radial-gradient(farthest-side, transparent 60%, #000 61%)",
        }}
      />
    </div>
  );
};

export default Spinner;

