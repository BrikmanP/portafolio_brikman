const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <div className="grid-skills">
                <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt css-icon"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square js-icon"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-java java-icon"></i>
                    <p>Java</p>
                </div>
                <div className="skill-card node">
                    <i className="fa-brands fa-microsoft csharp-icon"></i>
                    <p>C#</p>
                </div>
                <div className="skill-card python">
                    <i className="fa-brands fa-microsoft sql-icon"></i>
                    <p>SqlServerManagmentStudio</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;