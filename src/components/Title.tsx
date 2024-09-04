

interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-16">
        <h2 className="mt-8 text-[#aabcbf] text-3xl sm:text-4xl md:text-6xl font-light">{title}</h2>
        <p className="mt-8 text-[#aabcbf] font-light text-center">{subtitle}</p>
    </div>
  )
}

export default Title