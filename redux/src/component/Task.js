import React from 'react'
import Card from 'react-bootstrap/Card';
export default function Task({task}) {
   
  return (
    <div>
        <>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Text>
      { task.id} 
      </Card.Text>
      <Card.Text>
      { task.description} 
      </Card.Text>
      <Card.Text>
      { task.isDone} 
      </Card.Text>
    </Card.Body>
  </Card>

  </>
    </div>
  )
}
