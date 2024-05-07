

interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h2 className="mt-8 text-[#aabcbf] text-4xl sm:text-6xl font-light">{title}</h2>
        <p className="mt-8 text-[#aabcbf] font-light">{subtitle}</p>
    </div>
  )
}

export default Title