import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import '../styles/pages/Legal.css'

export default function AvisoLegal() {
    return (
        <>
            <Header />
            <main className="legal-page">
                <div className="legal-container">
                    <h1>Aviso Legal</h1>
                    <p className="legal-updated">Última actualización: mayo de 2026</p>

                    <section className="legal-section">
                        <h2>1. Titular de la web</h2>
                        <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa:</p>
                        <ul>
                            <li><strong>Titular:</strong> Estrella Gonzales Ulloa</li>
                            <li><strong>Email:</strong> <a href="mailto:Gonzalesulloae@gmail.com">Gonzalesulloae@gmail.com</a></li>
                            <li><strong>Teléfono:</strong> <a href="tel:+34640839981">+34 640 83 99 81</a></li>
                            <li><strong>Instagram:</strong> <a href="https://www.instagram.com/estrellasinfiltro" target="_blank" rel="noopener noreferrer">@estrellasinfiltro</a></li>
                            <li><strong>TikTok:</strong> <a href="https://www.tiktok.com/@estrellasinfiltro" target="_blank" rel="noopener noreferrer">@estrellasinfiltro</a></li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>2. Objeto y finalidad</h2>
                        <p>El sitio web <strong>estrellasinfiltro.netlify.app</strong> es una plataforma de carácter informativo y personal. Su finalidad es dar a conocer los servicios y contenidos de Estrella sin filtro, sin que ello implique el ejercicio de actividad comercial regulada.</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Propiedad intelectual</h2>
                        <p>Todos los contenidos de este sitio web — textos, imágenes, diseño y código — son propiedad de Estrella Gonzales Ulloa o se utilizan con la debida autorización. Queda prohibida su reproducción total o parcial sin consentimiento expreso.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Responsabilidad</h2>
                        <p>La titular no se responsabiliza del uso indebido de los contenidos ni de los posibles daños derivados del acceso a esta web. Los enlaces a sitios externos son meramente informativos y la titular no controla ni se hace responsable de su contenido.</p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Legislación aplicable</h2>
                        <p>Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso de esta web, las partes se someten a los juzgados y tribunales competentes conforme a derecho.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
