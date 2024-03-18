
<div>
    @if(isset($name))
        <h2>Имя {{ $name }}</h2>
    @endif

    @if(isset($email))
        <h2>Почта {{ $email }}</h2>
    @endif

    @if(isset($phone))
        <h2>Телефон {{ $phone }}</h2>
    @endif

    @if(isset($date))
        <h2>Дата {{ $date }}</h2>
    @endif

    @if(isset($city))
        <h2>город {{ $city }}</h2>
    @endif

    @if(isset($english))
        <h2>Уровень английского языка {{ $english }}</h2>
    @endif

</div>
