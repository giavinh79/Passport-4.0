import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import RoleCreation from './RoleCreation';

export default class RoleForm extends React.Component {
    createRole = (e) => {
        e.preventDefault();
        window.location.href="../roles"
    }

  render() {
    return (
      <Form style={{display: 'flex', flexDirection: 'column', margin: '2rem', border: '1px solid #ccc', width: '40%'}} onSubmit={this.createRole}>
        <h2 style={{marginBottom: '1rem', padding: '2rem 2rem 0 2rem'}}>Create a Role</h2>
        <FormGroup row style={{padding: '0 2rem'}}>
          <Label for="exampleEmail" sm={4}>Role Description</Label>
          <Col sm={8}>
            <Input type="input" name="email" id="exampleEmail" required/>
          </Col>
        </FormGroup>
        <FormGroup row style={{padding: '0 2rem'}}>
            <Label for="exampleSelectMulti" sm={4}>Assign to Group</Label>
            <Col sm={8}>
                <Input type="select" name="select" id="exampleSelect">
                    <option>Customer</option>
                    <option>Bank</option>
                    <option>Host</option>
                </Input>
          </Col>
        </FormGroup>
        <FormGroup style={creation}>
            <div style={{display: 'flex', justifyContent: 'center', maxHeight: '20rem'}}>
                <RoleCreation />
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 'auto'}}>
                <Button>Save</Button>
            </div>
        </FormGroup>
      </Form>
    );
  }
}

const creation = {
    display: 'flex',
    flexDirection: 'column',
    flex: 'auto',
    margin: '2rem 0 0 0',
    backgroundColor: '#EDF2F7',
    width: '100%',
    padding: '2rem'
}