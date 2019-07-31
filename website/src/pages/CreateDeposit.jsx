import React from 'react'
import Header from '../components/Header';
import DepositList from './DepositList'
import NavBar from '../components/NavBar.jsx'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { AddCircle } from '@material-ui/icons'
import { Paper } from '@material-ui/core';
import { PAGES } from './Dashboard';

export default class CreateDeposit extends React.Component {
    state = {
        user: true,
    }

    render() {
        return this.state.user === true ? (
            <>
                <Paper style={{ padding: '1rem', maxWidth: '100%' }}>
                    <h1 style={{ color: '#666' }}>New Deposit</h1>

                    <Form style={{ margin: "1rem", height: '90%' }}>
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="select" name="location" id="location">
                                <option>190 King St, Kitchener, Ontario</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="accountNumber">Account Number:</Label>
                            <Input type="select" name="accountNumber" id="accountNumber">
                                <option>1948****** - Weber Market bank account King St</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="routingTransitNumber">Routing Transit Number:</Label>
                            <Input type="input" name="routingTransitNumber" id="routingTransitNumber" />
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Row >
                                <Col sm={4}>
                                    <Label for="depositType">Deposit Type:</Label>
                                </Col>
                                <Col sm={2}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Simple
                                    </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Remittance
                                    </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup tag="fieldset">
                            <Row>
                                <Col sm={4}>
                                    <Label for="ClearingChannel">Clearing Channel:</Label>
                                </Col>
                                <Col sm={2}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            Image
                                    </Label>
                                    </FormGroup>
                                </Col>
                                <Col sm={4}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="radio" name="radio1" />{' '}
                                            ACH-ARC
                                    </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Label for="companyName">Company Name:</Label>
                            <Input type="select" name="companyName" id="companyName">
                                <option>Weber Market Waterloo</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <AddCircle style={{ color: 'blue', marginBottom: '2px', marginRight: '5px' }} />
                            <Label for="optionalField1">Add Optional Field</Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="numItems">Number of Items:</Label>
                            <Input type="input" name="numItems" id="numItems" defaultValue={0} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="declaredAmount">Declared Amount ($)</Label>
                            <Input type="input" name="declaredAmount" id="declaredAmount" />
                        </FormGroup>
                        <div style={{ justifyContent: 'space-between', width: '500px' }}>
                            <Button onClick={() => this.props.changePage(PAGES.DASHBOARD)} style={{ marginRight: '1rem' }}>Start Capture</Button>
                            <Button>Cancel</Button>
                        </div>
                    </Form>
                </Paper>
            </>
        ) : (
                <div></div>
            );
    }
}

const styles = {
    body: {
        display: 'flex',
        height: '89%',
        width: '100%',
        flex: 'auto'
    }
}