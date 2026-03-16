import ProjectCard from "../components/ProjectCard";

// IMG PROJECTS
//casa peru
import casaPeruLogo from '../assets/projects/casa-peru/casa-peru-logo1.png';
import casaPeru1 from '../assets/projects/casa-peru/casa-peru1.png';
import casaPeru2 from '../assets/projects/casa-peru/casa-peru2.png';
import casaPeru3 from '../assets/projects/casa-peru/casa-peru3.png';

//quqaw
import quqawLogo from "../assets/projects/quqaw/quqaw-logo1.png"
import quqaw1 from "../assets/projects/quqaw/quqaw-1.png"
import quqaw2 from "../assets/projects/quqaw/quqaw-2.png"
import quqaw3 from "../assets/projects/quqaw/quqaw-3.png"
import quqaw4 from "../assets/projects/quqaw/quqaw-4.png"

//Laura Serra

import lauraSerraLogo from "../assets/projects/laura-serra/laura-serra-logo1.png"
import lauraSerra1 from "../assets/projects/laura-serra/laura-serra1.png"

//the luxury

import luxuryLogo from "../assets/projects/theluxury/luxury-logo1.png"
import luxury1 from "../assets/projects/theluxury/luxury1.png"
import luxury2 from "../assets/projects/theluxury/luxury2.png"
import luxury3 from "../assets/projects/theluxury/luxury3.png"

//Jonald

import jonaldLogo from "../assets/projects/jonald/jonald-logo1.png"
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
                            description="Desarrollo una estrategia integral de redes sociales para el restaurante peruano Casa Perú, creando contenido gastronómico que conecta con la cultura y el sabor auténtico."
                            images={[casaPeru1, casaPeru2, casaPeru3]}
                            results="Producción de contenido | Reels y videos gastronómicos | crecimiento digital.  "
                        />
                    </article>

                    <article>
                        {/* Jonald*/}
                        <ProjectCard
                            logo={jonaldLogo}
                            title="Jonald"
                            description="Desarrollo una estrategia integral de redes sociales para la marca personal artística, potenciando su identidad como cantante y compositor. Creo contenido que transmite su energía, presencia escénica y conexión con el público, reforzando su imagen y posicionamiento digital."
                            images={[jonald1, jonald2, jonald3]}
                            results=" Producción de contenido| Impacto | Reels y videos | Crecimiento digital. "
                        />
                    </article>

                    <article>
                        {/* QUQAW*/}
                        <ProjectCard
                            logo={quqawLogo}
                            title="QuQaw"
                            description="Trabajo la marca desde su esencia, posicionándola no solo como restaurante, sino como una experiencia que se vive y se comparte. Desarrollo contenido visual estratégico que resalta sus platos, su ambiente y su personalidad. Además, incorporo un toque de humor en las publicaciones, alineado con el estilo y la visión del CEO, para generar cercanía"
                            images={[quqaw1, quqaw2, quqaw3, quqaw4]}
                            results=" Producción de contenido | Engagement | Reels y videos | Crecimiento digital. "
                        />
                    </article>

                    <article>
                        {/* LAURA SERRA*/}
                        <ProjectCard
                            logo={lauraSerraLogo}
                            title="Laura Serra"
                            description="Trabajo la presencia digital de la marca potenciando su imagen y destacando la calidad de cada diseño de uñas.
 Creo contenido visual que muestra el detalle, el acabado y la experiencia del servicio, reforzando la identidad de la marca. Además, compartimos información de valor para una comunidad que está en crecimiento, generando confianza y cercanía.
"
                            images={[lauraSerra1,]}
                            results="Producción de contenido | Visibilidad | Crecimiento digital | Comunidad. "
                        />
                    </article>

                    <article>
                        {/* LUXURY*/}
                        <ProjectCard
                            logo={luxuryLogo}
                            title="The Luxury love BCN"
                            description="Potencio la presencia digital de la marca, posicionándola en redes sociales con una estrategia visual y comunicativa alineada a su identidad. Creamos contenido atractivo y sutil que genera curiosidad, conversación y conexión con la audiencia, manteniendo siempre una estética cuidada y coherente con el concepto de la tienda. "
                            images={[luxury1, luxury2, luxury3]}
                            results="Producción de contenido | Deseo | Engagement | Crecimiento digital . "
                        />
                    </article>



                </div>
            </div>
        </section>
    );
}