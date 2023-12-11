import Form from 'react-bootstrap/Form';

function TextControlsExample() {
  return (
    <div className="d-flex justify-content-center">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name program</Form.Label>
            <Form.Control type="email" placeholder="bruh" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>details</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>gamba</Form.Label>
            <Form.Control type="email" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
    </div>
  );
}

export default TextControlsExample;