import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>Acerca de mi</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        
                        Como desarrollador, siempre he sido apasionado por crear soluciones elegantes y efectivas a problemas complejos. Tengo una sólida base en desarrollo de software, con un enfoque en tecnologías web como HTML, CSS y JavaScript. Disfruto trabajando tanto en el front-end como en el back-end de las aplicaciones, y siempre estoy buscando formas de optimizar el rendimiento, mejorar la experiencia del usuario y garantizar el más alto nivel de calidad de código.
                    </p>
                    <p>
                        A lo largo de mi carrera, he trabajado en una amplia gama de proyectos, desde sitios web estáticos simples hasta aplicaciones a nivel empresarial complejas. Tengo experiencia en trabajar con una variedad de herramientas y marcos de desarrollo, incluyendo, Angular, , Node.js Siempre estoy ansioso por aprender y explorar nuevas tecnologías, y constantemente estoy buscando oportunidades para mejorar mis habilidades y conocimientos.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Brik and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;