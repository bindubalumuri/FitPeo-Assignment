import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const CustomerFeedback = () => {
  const feedbacks = [
    { name: 'Jenny Wilson', rating: 5, feedback: 'The food was excellent and so was the service. I tried the parmesan chicken and it was delicious.' },
    { name: 'Dianne Russell', rating: 4, feedback: 'Loved the taste. Definitely served on homemade focaccia bread and not ciabatta.' },
    { name: 'Devon Lane', rating: 5, feedback: 'Amazing service, the steak was lean meat and tasted delicious.' },
  ];

  return (
    <Card className="bg-dark text-white mb-4">
      <Card.Header>Customer's Feedback</Card.Header>
      <ListGroup variant="flush">
        {feedbacks.map((feedback, index) => (
          <ListGroup.Item key={index} className="bg-dark text-white">
            <div className="d-flex justify-content-between">
              <strong>{feedback.name}</strong>
            </div>
            <div>
            <span>
                {Array(feedback.rating).fill().map((_, i) => (
                  <span key={i} className="text-warning">&#9733;</span>
                ))}
              </span>
            </div>
            <p>{feedback.feedback}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default CustomerFeedback;
