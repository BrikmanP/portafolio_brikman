import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/brikman.jpg' className="profile-img" width={300} height={300} alt="Brikman'P. personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Brikman Paul Morales👋</h1>
                <p>
                    I'm a software developer based in Bogotá Colombia. I specialize in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/BrikmanPaul"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href=""
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brikman-paul-morales-52a9a7245/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;