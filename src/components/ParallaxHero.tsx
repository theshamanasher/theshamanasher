import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  imageUrl: string;
}

const ParallaxHero: React.FC<HeroSectionProps> = ({
  title,
  subtitle1,
  subtitle2,
  imageUrl,
}) => {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "500px",
    position: "relative",
    zIndex: -1,
  };

  const textBorderStyle: React.CSSProperties = {
    textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    `,
  };

  return (
    <div
      style={sectionStyle}
      className="flex justify-center sm:justify-start items-center"
    >
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 1 }} />
      <div className="w-full max-w-screen-2xl mx-auto">
      <div
        id="innerContainer"
        className="flex flex-col justify-start items-center sm:items-start sm:ml-10 px-4 sm:px-16 relative z-20 w-full max-w-[750px] transform translate-y-[-40%] md:translate-y-0"
      >
        <h1
          className="text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center"
          style={textBorderStyle}
        >
          {title}
        </h1>
        {subtitle1 && (
          <p
            className="mt-8 text-white text-lg sm:text-xl md:text-2xl text-center sm:text-left"
            style={textBorderStyle}
          >
            {subtitle1}
          </p>
        )}
        {subtitle2 && (
          <p
            className="mt-8 text-white text-lg sm:text-xl md:text-2xl text-center sm:text-left"
            style={textBorderStyle}
          >
            {subtitle2}
          </p>
        )}
      </div>
      </div>
    
    </div>
  );
};

export default ParallaxHero;
