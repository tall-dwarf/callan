import { useAppSelector } from "../hooks/redux"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type IsAuthProps = {
    children: JSX.Element,
}

export default function IsAuth({ children }: IsAuthProps) {
    const user = useAppSelector(state => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.isAuth) {
            navigate('/404')
        }
    }, [])


    return children;
}