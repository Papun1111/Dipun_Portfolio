import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Header.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50); // Decreased the delta for faster typing
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Analyst", "Business Analyst", "Consultant" ];
  const period = 1500; // Decreased the period to make the switch between texts faster

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updatedText);
    
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2); // Faster deleting effect
    }
    
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period); // Normal speed once full text is displayed
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100); // Speed up after text is deleted
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner bg-gradient-to-r from-blue-50 to-blue-100 py-20" id="home">
      <Container>
        <Row className="flex flex-col-reverse md:flex-row items-center justify-between">
          <Col xs={12} md={6} xl={7} className="text-center md:text-left px-4">
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={`space-y-4 ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                <span className="tagline text-blue-600 font-semibold text-sm tracking-wider">Welcome to my Portfolio</span>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {`Hi! I'm Dipun`} <span className="txt-rotate text-blue-500" dataPeriod="1000" data-rotate='[ "Data Analyst", "Business Analyst", "Consultant" ]'>
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                A recent graduate from the University of Birmingham (QS Top 100) with an M.Sc. in Business Analytics (Merit). My expertise spans Python, SQL, Tableau, and Excel, with additional experience in SPSS, Qlik, and SAP. I have a proven track record in delivering actionable insights through data analysis, machine learning, and dashboard creation. Beyond academics, I enjoy staying active at the gym, exploring photography, and delving into a good book.
                 </p>
                <button 
                  onClick={() => console.log('connect')} 
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center gap-2"
                >
                  Let's Connect <ArrowRightCircle size={25} />
                </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="mb-8 md:mb-0 flex justify-center">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={`max-w-sm ${isVisible ? "animate__animated animate__zoomIn" : ""}`}>
                  <img src={headerImg} alt="Header Img" className="w-full h-auto object-contain"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
