import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import '../styles/pages/Legal.css'

export default function Privacidad() {
    return (
        <>
            <Header />
            <main className="legal-page">
                <div className="legal-container">
                    <h1>Política de Privacidad</h1>
                    <p className="legal-updated">Última actualización: mayo de 2026</p>

                    <section className="legal-section">
                        <h2>1. Responsable del tratamiento</h2>
                        <ul>
                            <li><strong>Titular:</strong> Estrella Gonzales Ulloa</li>
                            <li><strong>Email:</strong> <a href="mailto:Gonzalesulloae@gmail.com">Gonzalesulloae@gmail.com</a></li>
                        </ul>
                    </section>

                    <section className="legal-section">
                        <h2>2. Datos que se recogen</h2>
                        <p>A través del formulario de contacto se pueden recoger los siguientes datos personales:</p>
                        <ul>
                            <li>Nombre</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Teléfono (opcional)</li>
                            <li>Mensaje</li>
                        </ul>
                        <p>No se recogen datos de forma automática salvo los registros técnicos estándar del servidor (dirección IP, navegador, fecha de acceso).</p>
                    </section>

                    <section className="legal-section">
                        <h2>3. Finalidad del tratamiento</h2>
                        <p>Los datos facilitados a través del formulario se utilizan exclusivamente para responder a las consultas recibidas y mantener la comunicación con la persona interesada. No se utilizan con fines comerciales ni se ceden a terceros.</p>
                    </section>

                    <section className="legal-section">
                        <h2>4. Base legal</h2>
                        <p>El tratamiento de los datos se basa en el consentimiento del usuario, que los facilita voluntariamente al enviar el formulario de contacto, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos (LOPDGDD).</p>
                    </section>

                    <section className="legal-section">
                        <h2>5. Conservación de los datos</h2>
                        <p>Los datos se conservan únicamente durante el tiempo necesario para gestionar la consulta y, en ningún caso, más allá del período legalmente establecido.</p>
                    </section>

                    <section className="legal-section">
                        <h2>6. Derechos del usuario</h2>
                        <p>Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación del tratamiento escribiendo a <a href="mailto:Gonzalesulloae@gmail.com">Gonzalesulloae@gmail.com</a>.</p>
                        <p>Si consideras que el tratamiento de tus datos no es conforme a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>
                    </section>

                    <section className="legal-section">
                        <h2>7. Cookies</h2>
                        <p>Este sitio web no utiliza cookies propias ni de terceros con fines analíticos o publicitarios. Únicamente se pueden generar cookies técnicas estrictamente necesarias para el funcionamiento de la web.</p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}
