import React from 'react';

interface HeroSectionProps {
  title: string;
  imageUrl: string;
}

const ParallaxHero: React.FC<HeroSectionProps> = ({ title, imageUrl }) => {
  const sectionStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '500px',
  };

  return (
    <div style={sectionStyle} className="flex justify-center sm:justify-start items-center">
      <h1 className="text-white text-4xl font-bold text-center sm:ml-36">{title}</h1>
    </div>
  );
};

export default ParallaxHero;