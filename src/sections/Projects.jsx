import ProjectCard from "../components/ProjectCard";
import "../styles/sections/Projects.css"

// IMG PROJECTS
//casa peru
import casaPeruLogo from '../assets/projects/casa-peru/casa-peru-logo.png';
import casaPeru1 from '../assets/projects/casa-peru/casa-peru1.png';
import casaPeru2 from '../assets/projects/casa-peru/casa-peru2.png';
import casaPeru3 from '../assets/projects/casa-peru/casa-peru3.png';

//quqaw
import quqawLogo from "../assets/projects/quqaw/quqaw-logo.png"
import quqaw1 from "../assets/projects/quqaw/quqaw-1.png"
import quqaw2 from "../assets/projects/quqaw/quqaw-2.png"
import quqaw3 from "../assets/projects/quqaw/quqaw-3.png"
import quqaw4 from "../assets/projects/quqaw/quqaw-4.png"

//Laura Serra

import lauraSerraLogo from "../assets/projects/laura-serra/laura-serra-logo.png"
import lauraSerra1 from "../assets/projects/laura-serra/laura-serra1.png"

//the luxury

import luxuryLogo from "../assets/projects/theluxury/luxury-logo.png"
import luxury1 from "../assets/projects/theluxury/luxury1.png"
import luxury2 from "../assets/projects/theluxury/luxury2.png"
import luxury3 from "../assets/projects/theluxury/luxury3.png"

//Jonald

import jonaldLogo from "../assets/projects/jonald/jonald-logo.png"
import jonald1 from "../assets/projects/jonald/jonald-1.png"
import jonald2 from "../assets/projects/jonald/jonald-2.png"
import jonald3 from "../assets/projects/jonald/jonald-3.png"






export default function Projects() {
    return (
        <section id="projects">
            <div className="cont-projects">
                <h2>Marcas que Brillan</h2>
                <p className="subtitle-projects">Casos de éxito que transformaron marcas</p>

                <div className="container-projects">

                    {/* CASA PERÚ*/}
                    <article>
                        <ProjectCard
                            logo={casaPeruLogo}
                            title="Casa Perú"
                            description="Estrategia completa de redes sociales para restaurante peruano. Contenido gastronómico que conecta con la cultura y sabor auténtico."
                            images={[casaPeru1, casaPeru2, casaPeru3]}
                            results="+180% de engagement | 50K nuevos seguidores en 6 meses"
                        />
                    </article>

                    <article>
                        {/* Jonald*/}
                        <ProjectCard
                            logo={jonaldLogo}
                            title="Jonald (marca personal)"
                            description="Estrategia completa de redes sociales para restaurante peruano. Contenido gastronómico que conecta con la cultura y sabor auténtico."
                            images={[jonald1, jonald2, jonald3]}
                            results="+180% de engagement | 50K nuevos seguidores en 6 meses"
                        />
                    </article>

                    <article>
                        {/* QUQAW*/}
                        <ProjectCard
                            logo={quqawLogo}
                            title="QuQaw"
                            description="Estrategia completa de redes sociales para restaurante peruano. Contenido gastronómico que conecta con la cultura y sabor auténtico."
                            images={[quqaw1, quqaw2, quqaw3, quqaw4]}
                            results="+180% de engagement | 50K nuevos seguidores en 6 meses"
                        />
                    </article>

                    <article>
                        {/* LAURA SERRA*/}
                        <ProjectCard
                            logo={lauraSerraLogo}
                            title="Laura Serra"
                            description="Estrategia completa de redes sociales para restaurante peruano. Contenido gastronómico que conecta con la cultura y sabor auténtico."
                            images={[lauraSerra1,]}
                            results="+180% de engagement | 50K nuevos seguidores en 6 meses"
                        />
                    </article>

                    <article>
                        {/* LUXURY*/}
                        <ProjectCard
                            logo={luxuryLogo}
                            title="The Luxury love BCN"
                            description="Estrategia completa de redes sociales para restaurante peruano. Contenido gastronómico que conecta con la cultura y sabor auténtico."
                            images={[luxury1, luxury2, luxury3]}
                            results="+180% de engagement | 50K nuevos seguidores en 6 meses"
                        />
                    </article>



                </div>
            </div>
        </section>
    );
}