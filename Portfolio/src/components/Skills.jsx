import pythonLogo from "../assets/img/python-logo.svg"; // Python logo
import sqlLogo from "../assets/img/sql-logo.svg"; // SQL logo
import tableauLogo from "../assets/img/tableau-logo.svg"; // Tableau logo
import excelLogo from "../assets/img/excel-logo.svg"; // Excel logo
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import "./Skills.css"
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
                            <strong>Python</strong> for data manipulation and machine learning, <strong>SQL</strong> for database queries and data extraction, <strong>Tableau</strong> for interactive visualizations and dashboards, and <strong>Excel</strong> for basic analysis and reporting. These skills work together to ensure efficient data handling, insightful analysis, and effective decision-making.
                        </p>

                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item skill-item">
                                <div className="skill-icon">
                                    <img src={pythonLogo} alt="Python Logo" className="skill-logo" />
                                </div>
                                <h5>Python</h5>
                            </div>
                            <div className="item skill-item">
                                <div className="skill-icon">
                                    <img src={sqlLogo} alt="SQL Logo" className="skill-logo" />
                                </div>
                                <h5>SQL</h5>
                            </div>
                            <div className="item skill-item">
                                <div className="skill-icon">
                                    <img src={tableauLogo} alt="Tableau Logo" className="skill-logo" />
                                </div>
                                <h5>Tableau</h5>
                            </div>
                            <div className="item skill-item">
                                <div className="skill-icon">
                                    <img src={excelLogo} alt="Excel Logo" className="skill-logo" />
                                </div>
                                <h5>Excel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
