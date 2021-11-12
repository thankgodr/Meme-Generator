import React from 'react';
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';

class TextComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handler(e.target.value);
  }

  render() {
    return (
      <Form>
        <FloatingLabel label={this.props.formLabel} className="mb-3">
          <Form.Control onChange={this.handleChange} type="text" placeholder="I love React" />
        </FloatingLabel>
      </Form>
    );
  }
}

export default TextComponent;
