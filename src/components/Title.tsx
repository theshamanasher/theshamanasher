

interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl sm:text-5xl">{title}</h2>
        <p className="mt-8">{subtitle}</p>
    </div>
  )
}

export default Title