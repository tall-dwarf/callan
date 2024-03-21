import ConsultationForm from "../../widgets/ConsultationForm/ConsultationForm"

export default function Consultation() {
    

    return (
        <>
            <section className="consultation">
                <div className="container">
                    <div className="consultation-inner">
                        <h2 className="consultation__title">Заявка на консультацию</h2>
                            <ConsultationForm />
                    </div>
                </div>
            </section>
        </>
    )
}