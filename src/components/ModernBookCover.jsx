import React from "react";

const radiusMap = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
};

const sizeMap = {
  sm: { width: "180px", spineTranslation: "152px" },
  md: { width: "220px", spineTranslation: "192px" },
  lg: { width: "260px", spineTranslation: "232px" },
};

const colorMap = {
  slate: { from: "from-slate-900", to: "to-slate-700" },
  gray: { from: "from-gray-900", to: "to-gray-700" },
  zinc: { from: "from-zinc-900", to: "to-zinc-700" },
  cyan: { from: "from-cyan-900", to: "to-cyan-700" },
  amber: { from: "from-amber-900", to: "to-amber-700" },
  blue: { from: "from-blue-900", to: "to-blue-700" },
  neutral: { from: "from-neutral-900", to: "to-neutral-700" },
};

const ModernBookCover = ({
  radius = "md",
  size = "md",
  color = "blue",
  isStatic = false,
  className = "",
  noiseTexture = "https://www.transparenttextures.com/patterns/asfalt-light.png",
  children,
}) => {
  const gradient = colorMap[color] || colorMap.zinc;

  return (
    <div
      className={`group w-min font-winky ${className}`}
      style={{ perspective: "800px", zIndex: 10 }}
    >
      <div
        style={{
          width: sizeMap[size].width,
          transition: "transform 1500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className={`relative aspect-[3/4] ${radiusMap[radius]} [transform-style:preserve-3d] ${
          isStatic
            ? "[transform:rotateY(-90deg)]"
            : "group-hover:[transform:rotateY(-90deg)] [transform:rotateY(0deg)]"
        }`}
      >
        {/* Back Cover */}
        <div
          className={`absolute inset-0 size-full p-6 text-white bg-gradient-to-tr ${gradient.from} ${gradient.to} ${radiusMap[radius]} z-0`}
          style={{
            transform: "translateZ(-40px)",
            boxShadow: "-6px 0 14px rgba(0,0,0,0.2)",
          }}
        />

        {/* Pages */}
        <div
          className="absolute inset-0 size-full z-10"
          style={{
            transform: "translateZ(0px)",
            background:
              "repeating-linear-gradient(90deg, #ffffff 0px, #e4e4e4 2px, #ffffff 4px)",
            borderRadius: "8px",
            opacity: 0.85,
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600 font-bold text-lg -rotate-12 opacity-60">
            Click me
          </div>
        </div>

        {/* Front Cover */}
        <div
          className={`absolute inset-0 size-full flex flex-col justify-end p-6 text-white bg-gradient-to-tr ${gradient.from} ${gradient.to} ${radiusMap[radius]} z-20`}
          style={{
            transform: "translateZ(40px)",
            boxShadow: "6px 6px 16px rgba(0,0,0,0.3)",
          }}
        >
          {/* Noise Overlay */}
          <div
            style={{
              backgroundImage: `url(${noiseTexture})`,
              backgroundSize: "cover",
              opacity: 0.08,
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              zIndex: 10,
              mixBlendMode: "overlay",
            }}
          />
          {/* Text Content */}
          <div className="relative z-20">{children}</div>
        </div>

        {/* Spine */}
        <div
          className="absolute left-0 z-30"
          style={{
            top: "3px",
            bottom: "3px",
            width: "48px",
            transform: `translateX(${sizeMap[size].spineTranslation}) rotateY(90deg)`,
            background: "linear-gradient(90deg, #ffffff 50%, #f5f5f5 50%)",
            boxShadow: "inset -1px 0 3px rgba(0,0,0,0.1)",
            borderRadius: "4px",
          }}
        />
      </div>
    </div>
  );
};

// Extra components
export const BookHeader = ({ children, className = "" }) => (
  <div className={`flex gap-2 items-center mb-2 font-winky ${className}`}>
    {children}
  </div>
);

export const BookTitle = ({ children, className = "" }) => (
  <h2 className={`font-bold text-lg md:text-xl select-none mb-1 font-winky ${className}`}>
    {children}
  </h2>
);

export const BookDescription = ({ children, className = "" }) => (
  <p className={`opacity-80 select-none text-xs md:text-sm font-winky ${className}`}>
    {children}
  </p>
);

export default ModernBookCover;
