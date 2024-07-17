import React from 'react';

interface HeroProps {
  bannerImage: string;
  text?: string;
}

const Hero: React.FC<HeroProps> = ({ bannerImage, text }) => {
  return (
    <div className="w-full h-96 bg-cover bg-center relative" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="bg-black bg-opacity-30 flex items-center justify-center h-full">
        <p className="text-white text-xl md:text-3xl font-bold">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
