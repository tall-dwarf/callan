


export default function Consultation(){

    return(
        <>
        <section className="consultation">
        <div className="container">
            <div className="consultation-inner">
                <h2 className="consultation__title">Заявка на консультацию</h2>
                <form className="consultation-form" action="">
                    <div className="form-item">
                        <label className="form-item__label" htmlFor=""><i className="form-item__icon fa-solid fa-user fa-lg "></i> ФИО</label>
                        <input type="text" />
                    </div>
                    <div className="form-item">
                        <label className="form-item__label" htmlFor=""><i className="form-item__icon fa-solid fa-calendar-days fa-lg"></i> Дата рождения</label>
                        <input type="date" />
                    </div>
                    <div className="form-item">
                        <label className="form-item__label" htmlFor=""><i className="form-item__icon fa-solid fa-calendar-days fa-lg"></i> Контактные данные</label>
                        <input placeholder="Город" type="text" />
                        <input placeholder="+998 (___) __ - __ - __" type="text" />
                        <input placeholder="E-mail" type="text" />
                    </div>
                    <div className="form-item">
                        <label className="form-item__label" htmlFor=""><i className="form-item__icon fa-solid fa-calendar-days fa-lg"></i> Уровень английского</label>
                        <div className="radio-list">
                            <div className="radio-item">
                                <input name="123" id="re1" type="radio" />
                                <label htmlFor="re1">Начинающий (А1 - А2)</label>
                            </div>
                            <div className="radio-item">
                                <input name="123" id="re2" type="radio" />
                                <label htmlFor="re2">Начинающий (А1 - А2)</label>
                            </div>
                        </div>
                    </div>
                    <button className="form__btn">
                        <i className="fas fa-phone"></i>
                        <span>Отправить</span>
                    </button>
                </form>
            </div>
        </div>
    </section>
    </>
    )
}