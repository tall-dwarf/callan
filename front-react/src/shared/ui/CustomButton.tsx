import { icons } from "../../app/data"

type CustomButtonProps = {
    text: string,
    icon: keyof typeof icons,
    className?: string,
    onClick: () => void
}

export default function CustomButton({ text, icon, className, onClick }: CustomButtonProps) {

    const DynamicIcon = icons[icon]

    return (
        <button onClick={() => onClick()} className={className}>
            <DynamicIcon color="#ffffff" size={35} /> 
            <span>{text}</span>
        </button>
    )
}