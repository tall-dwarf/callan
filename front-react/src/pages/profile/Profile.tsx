import { useAppSelector } from "../../shared/hooks/redux"





export default function Profile() {
    const { user } = useAppSelector(state => state.user)

    return (
        <section className="profile">
            <h2>Имя пользователя {user.name}</h2>
            <h2>Почта {user.email}</h2>
            <h2>дата регистрации {user.created_at}</h2>
        </section>
    )
}