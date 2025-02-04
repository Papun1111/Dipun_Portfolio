import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import './Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Analyst", "Business Analyst", "Consultant" ];
  const period = 1500;

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
      setDelta(prevDelta => prevDelta / 2);
    }
    
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container className="banner-content">
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="banner-box">
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {`Hi! I'm Dipun`} <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                A recent graduate from the University of Birmingham (QS Top 100) with an M.Sc. in Business Analytics (Merit). My expertise spans Python, SQL, Tableau, and Excel, with additional experience in SPSS, Qlik, and SAP. I have a proven track record in delivering actionable insights through data analysis, machine learning, and dashboard creation. Beyond academics, I enjoy staying active at the gym, exploring photography, and delving into a good book.
              </p>
              <button onClick={() => console.log('connect')}>
                Let's Connect <ArrowRightCircle />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}