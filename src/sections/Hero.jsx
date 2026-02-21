import imgHero from "../assets/imgHero2.png"

import { Link } from "react-router-dom"

import ScrollSections from "../components/ScrollSections"


export default function Hero() {

    return (
        <>
            <section id="inicio">
                <div className="hero">
                    <div className="hero-container">
                        <div className="hero-content">
                            <h1>Tu marca merece <span className="gradient-text">brillar</span> en redes</h1>
                            <p>Estrategias de social media personalizadas para marcas que quieren crecer y conectar con su audiencia de forma auténtica.</p>

                            <div className="cta-buttons">
                                <Link to="/contacto"
                                    className="btn btn-primary"
                                    onClick={() => ScrollSections("contact")}
                                >
                                    Trabajemos juntos
                                </Link>
                                <Link to="/proyectos"
                                    className="btn btn-secondary"
                                    onClick={() => ScrollSections("projects")}
                                >
                                    Ver proyectos</Link>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <img src={imgHero} alt="Estrella" />


                            <div className="visual-content">
                                <h5>Estrella Gonzales Ulloa</h5>
                                <p>Periodista, locutora de radio, especialista en
                                    social media y creadora de contenido digital.</p>
                            </div>
                        </div>



                    </div>
                </div>

            </section>


        </>
    );
}