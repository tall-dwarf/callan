import { icons } from "../../app/data"

type BtnIconProps = {
    text: string,
    icon: keyof typeof icons,
    className?: string,
    onClick: () => void
}

export default function BtnIcon({ text, icon, className, onClick }: BtnIconProps) {

    const DynamicIcon = icons[icon]

    return (
        <button onClick={() => onClick()} className={className}>
            <DynamicIcon color="#ffffff" size={35} /> 
            <span>{text}</span>
        </button>
    )
}