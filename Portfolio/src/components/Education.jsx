import React from 'react';
import { Card } from 'react-bootstrap';
import './Education.css';

export const Education = () => {
  return (
    <div className="education-box">
      <Card className="education-card">
        <Card.Body>
          <Card.Title className="education-title">Education</Card.Title>
          <Card.Text className="education-details">
            <strong>University of Birmingham (QS Top 100)</strong><br />
            M.Sc. in Business Analytics (Merit)<br />
            Graduation Year: 2024<br />
            <em>Key Skills: Python, SQL, Tableau, Excel, SPSS, Qlik, SAP</em>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
