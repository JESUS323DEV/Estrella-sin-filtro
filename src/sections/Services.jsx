import { ChartSpline, Sparkles, UserStar, Vote } from "lucide-react"
import { Link } from 'react-router-dom'
import ScrollSections from "../components/ScrollSections"

export default function Services() {

    return (
        <>
            <section id="services">
                <div className="container">


                    <div className="section-header">
                        <h2>Servicios de Social Media</h2>
                        <p>Soluciones completas para hacer crecer tu presencia digital</p>
                    </div>


                    <article>
                        <div class="service-card">
                            <div className="strategy"><ChartSpline /></div>
                            <h3>Estrategia Digital</h3>
                            <p>Desarrollo de estrategias personalizadas basadas en análisis de mercado, competencia y comportamiento de tu audiencia para maximizar resultados.</p>
                        </div>
                    </article>

                    <article>
                        <div class="service-card ">
                            <div className="creation" ><Sparkles /></div>
                            <h3>Creación de Contenido</h3>
                            <p>Diseño gráfico, videos, reels, stories y posts que conectan con tu audiencia. Contenido alineado con tu identidad de marca y objetivos comerciales.</p>
                        </div>
                    </article>

                    <article>
                        <div class="service-card ">
                            <div className="community"><UserStar /></div>
                            <h3>Community Management</h3>
                            <p>Gestión de comunidad, respuesta a comentarios y mensajes, moderación y construcción de relaciones auténticas con tus seguidores.</p>
                        </div>
                    </article>

                    <article>
                        <div class="service-card ">
                            <div className="social"><Vote /></div>
                            <h3>Gestión de Redes Sociales</h3>
                            <p>Administración completa de tus perfiles en Instagram, Facebook y TikTok. Informes detallados mensuales con métricas clave y optimización de estrategias.</p>
                        </div>
                    </article>

                    <div className="cta-services">
                        <Link to="/contacto"
                            onClick={() => ScrollSections("contact")}
                        >Más información</Link>
                    </div>

                </div>
            </section>


        </>
    )
}