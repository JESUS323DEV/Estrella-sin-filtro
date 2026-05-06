import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'
import WhatsappIcon from "../assets/icon-redes/icon-whatsapp.png"
import insta from "../assets/icon-redes/instagram.png"
import tikTok from "../assets/icon-redes/tik-tok.png"
import Face from "../assets/icon-redes/facebook.png"

export default function Contact() {

    const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = `Hola, soy ${form.nombre} (${form.correo}): ${form.mensaje}`
        window.open(
            `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
            '_blank'
        )
    }

    const handleReset = () => {
        setForm({ nombre: '', correo: '', mensaje: '' })
    }

    return (
        <section id="contact">

            <div className="contact-header">
                <h2>¿Hablamos de tu proyecto?</h2>
                <p>Cuéntame sobre tu marca y creemos algo increíble juntos</p>
            </div>

            <div className="contact-body">
                <div className='contact-wrap'>

                    <div className="contact-right">
                        <h3>Envíame un mensaje</h3>
                        <form onSubmit={handleSubmit} className="contact-form">

                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    value={form.nombre}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="correo">Correo</label>
                                <input
                                    id="correo"
                                    name="correo"
                                    type="email"
                                    value={form.correo}
                                    onChange={handleChange}
                                    placeholder="tu@correo.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">Cuéntame tu idea</label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={form.mensaje}
                                    onChange={handleChange}
                                    placeholder="Tengo una marca de ropa y quiero crecer en Instagram..."
                                    required
                                    rows={5}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-send">
                                    <img src={WhatsappIcon} alt="WhatsApp" />
                                    Enviar
                                </button>
                                <button type="button" className="btn-clear" onClick={handleReset}>
                                    Limpiar
                                </button>
                            </div>

                        </form>
                    </div>



                    <div className="contact-left">
                        <h3>Contacto directo</h3>
                        <div className="contact-info">
                            <a
                                href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}`}
                                target="_blank"
                                className="contact-info-item"
                            >
                                <Phone size={20} />
                                <span>{import.meta.env.VITE_WHATSAPP_NUMBER}</span>
                            </a>
                            <a
                                href={`mailto:${import.meta.env.VITE_EMAIL}`}
                                className="contact-info-item"
                            >
                                <Mail size={20} />
                                <span>{import.meta.env.VITE_EMAIL}</span>
                            </a>
                        </div>

                        <div className="contact-socials">
                            <h3>Redes sociales</h3>
                            <span className='cont-socials-wrap'>
                                <a href={import.meta.env.VITE_INSTAGRAM_URL} target="_blank">
                                    <img src={insta} loading="lazy" alt="Instagram" />
                                </a>
                                {import.meta.env.VITE_FACEBOOK_URL && (
                                    <a href={import.meta.env.VITE_FACEBOOK_URL} target="_blank">
                                        <img loading="lazy" src={Face} alt="Facebook" />
                                    </a>
                                )}
                                <a href={import.meta.env.VITE_TIKTOK_URL} target="_blank">
                                    <img loading="lazy" src={tikTok} alt="TikTok" />
                                </a>
                            </span>
                        </div>

                    </div>



                </div>
            </div>

        </section>
    )
}
