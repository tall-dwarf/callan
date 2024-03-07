import { icons } from "../../app/data"


type BtnIconProps = {
    icon: keyof typeof icons,
    className?: string,
    onClick: () => void,
}

export default function BtnIcon({ icon, className, onClick }: BtnIconProps) {

    const DynamicIcon = icons[icon]

    return (
        <div role="button" onClick={() => onClick()} className={"btn-icon " + className}>
            <DynamicIcon size={18} fill="#fff" />
        </div>
    )
}