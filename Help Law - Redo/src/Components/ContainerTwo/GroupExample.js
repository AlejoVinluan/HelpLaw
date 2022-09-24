import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './GroupExample.css';
function GroupExample() {
  return (
    <CardGroup className='card-container'>
      <Card  border="warning" style={{ width: '18rem' }} className='card'>
       
        <Card.Body>
          <Card.Title>Definitions</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      
      <Card  border="warning" style={{ width: '18rem' }}className='card'>
       
        <Card.Body>
          <Card.Title>Translations</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card  border="warning" style={{ width: '18rem' }} className='card'>
        <Card.Body>
          <Card.Title>Equality</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;