import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
}

const ParallaxHero: React.FC<HeroSectionProps> = ({ title, subtitle,  imageUrl }) => {
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
        <div className="flex flex-col justify-start items-start sm:ml-36">
            <h1 className="text-white text-4xl font-bold text-center ">{title}</h1>
            <p className="mt-8">{subtitle}</p>
        </div>
    </div>
  );
};

export default ParallaxHero;