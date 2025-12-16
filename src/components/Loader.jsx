import React from "react";

const Loader = () => {
  return (
    // Full screen overlay
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900 z-50">
      {/* Radial-dot loader container with increased size */}
      <div className="relative w-20 h-20 animate-spinCustom">
        {/* Top dot */}
        <div className="absolute w-5 h-5 bg-primary rounded-full top-0 left-1/2 -translate-x-1/2"></div>

        {/* Right dot */}
        <div className="absolute w-5 h-5 bg-primary rounded-full top-1/2 right-0 -translate-y-1/2"></div>

        {/* Bottom dot */}
        <div className="absolute w-5 h-5 bg-primary rounded-full bottom-0 left-1/2 -translate-x-1/2"></div>

        {/* Left dot */}
        <div className="absolute w-5 h-5 bg-primary rounded-full top-1/2 left-0 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Loader;
