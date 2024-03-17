import { icons } from "../../app/data"


type BtnIconProps = {
    icon: keyof typeof icons,
    className?: string,
    onClick: () => void,
    size?: number
}

export default function BtnIcon({ icon, className, onClick, size = 18 }: BtnIconProps) {

    const DynamicIcon = icons[icon]

    return (
        <div role="button" onClick={() => onClick()} className={"btn-icon " + className}>
            <DynamicIcon size={size} fill="#fff" />
        </div>
    )
}