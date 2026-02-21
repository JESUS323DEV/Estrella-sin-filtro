import { Globe, Zap, Wrench, Check } from "lucide-react"

import { Link } from "react-router-dom"

import ScrollSections from "../components/ScrollSections"



export default function WebDevServices() {

    return (
        <>

            <section id="webServices">
                <div className="cont-webServices">
                    <div className="container-webServices">
                        <div className="title">
                            <h2>Servicios de Desarrollo Web</h2>
                            <p>Complementa tu presencia digital con una web profesional</p>
                        </div>


                        {/*CARD1*/}
                        <article>
                            <div className="cardServices">
                                <div className="title-card">
                                    <Globe className="globe" />
                                    <h3>Desarrollo Web Personalizado</h3>
                                    <p>Sitios web modernos, responsivos y optimizados para conversión. Desde landing pages hasta multi pages completos.</p>
                                </div>


                                <div className="body-card">
                                    <ul>
                                        <li><Check /> Diseño responsive mobile-first</li>
                                        <li><Check /> Optimización SEO</li>
                                        <li><Check /> Integración con redes sociales</li>
                                        <li><Check /> Formularios de contacto avanzados</li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        {/*CARD2*/}
                        <article>
                            <div className="cardServices">
                                <div className="title-card">
                                    <Zap className="zap" />

                                    <h3>Landing Pages de Alta Conversión</h3>
                                    <p>Páginas de aterrizaje optimizadas para campañas de marketing digital y generación de leads.</p>
                                </div>


                                <div className="body-card">
                                    <ul>
                                        <li><Check /> Diseño enfocado en conversión</li>
                                        <li><Check /> Integración con herramientas de email</li>
                                        <li><Check /> Formularios estratégicos de captación</li>
                                        <li><Check /> Velocidad de carga optimizada</li>
                                    </ul>
                                </div>
                            </div>

                        </article>


                        {/*CARD3*/}
                        <article>
                            <div className="cardServices">
                                <div className="title-card">
                                    <Wrench className="wrench" />

                                    <h3>Mantenimiento, soporte y actualizaciones</h3>
                                    <p>Actualizaciones y soporte técnico continuo para que tu web siempre esté al día.</p>
                                </div>


                                <div className="body-card">
                                    <ul>
                                        <li><Check /> Actualizaciones periódicas</li>
                                        <li><Check /> Backups regulares</li>
                                        <li><Check /> Soporte técnico prioritario</li>
                                        <li><Check /> Optimización de rendimiento</li>
                                    </ul>
                                </div>
                            </div>

                        </article>

                        <div className="cta1">
                            <Link to="/contacto"
                                onClick={() => ScrollSections("contact")}
                            >
                                Contáctanos
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}