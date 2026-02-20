import Face from "../assets/icon-redes/facebook.png"
import insta from "../assets/icon-redes/instagram.png"
import tikTok from "../assets/icon-redes/tik-tok.png"
import email from "../assets/icon-redes/email.png"
import Whatsapp from "../assets/icon-redes/icon-whatsapp.png"

import "../styles/sections/Contact.css"
export default function Contact() {

    return (

        <>
            <section>
                <div className="cont-contacto">
                    <div className="title-contact">
                        <h2>¿Hablamos de tu proyecto?</h2>
                        <p>Cuéntame sobre tu marca y creemos algo increíble juntos</p>
                    </div>


                    <div className="container-contact">


                        <div className="subtitle-contact">
                            <h4>Conectemos</h4>
                            <p>Estoy aquí para ayudarte a llevar tu marca al siguiente nivel. Ya sea que necesites gestión de redes sociales, desarrollo web, o ambos, trabajaremos juntos para lograr tus objetivos.</p>
                        </div>


                        <div className="content-direct">
                            <h4>Escríbeme y te atenderé lo antes posible</h4>
                            <div className="contact-direct" >
                                <a href="https://wa.me/+34640839981" target="_blank">
                                    <img src={Whatsapp} alt="Whatsapp" />
                                </a>

                                <a href="mailto:estrella@gmail.com" target="_blank">
                                    <img src={email} alt="Email" />
                                </a>
                            </div>
                        </div>

                        <div className="content-direct">
                            <h4>Si prefieres contactarme por redes sociales</h4>
                            <div className="contact-direct">
                                <a href="#" target="_blank"><img src={insta} alt="Instagram" /></a>
                                <a href="#" target="_blank"><img src={Face} alt="FaceBook" /></a>
                                <a href="#" target="_blank"><img src={tikTok} alt="Tik-Tok" /></a>
                            </div>
                        </div>




                    </div>


                </div>
            </section>

        </>
    )
} 