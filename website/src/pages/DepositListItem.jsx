import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, InputGroup, InputGroupAddon } from 'reactstrap';

var socket = require('socket.io-client')('https://passport-redesign-248321.appspot.com');
var QRCODE = require('qrcode.react');

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    table: {
        minWidth: 650
    },
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


const rows = [
    ['Frozen yoghurt', '07/10/19 09:55 AM', '000060', 'ACH-ARC', '190 King St, Kitchener, Ontario', 'Check Scanner', '1948****** - Weber Market bank account King St', 'wm_op1', '50.00', '4', 'Open-Incomplete', '3200000000153']
];

const headers = [
    "Tasks", "Create Date", "Deposit Number", "Type", "Location", "Capture", "Account", "Assigned Used ID", "Amount ($)", "Number of Items", "State", "Deposit ID"
]

class DepositListItem extends React.Component {

    state = {
        qrcode: false
    }

    handleModal = () => {
        window.location.href = "/create-deposit"
        // this.setState({ qrcode: true, socketId: socket.id })
        // socket.on('image', (data) => {
        //     this.setState({
        //         imageReady: true,
        //         imageData: data,
        //         showModal: true
        //     })
        // });
    }

    render() {
        const { classes } = this.props

        return (
            <div style={{ padding: '0 2rem', width: '100%' }}>
                <h1 style={{ color: '#666' }}>Deposit List Item - 000069</h1>
                <h6 style={{ color: '#666', marginLeft: '25px' }}>(Customer: Weber Market, Location: 190 King St, Kitchener, Ontario)</h6>
                <hr />

                <h5 style={{ color: '#666', fontWeight: 'bold' }}>Deposit Information</h5>

                <div style={{ marginLeft: '25px' }}>
                    <FormGroup row>
                        <Label sm={3}>Declared Amount</Label>
                        <Col sm={3}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input placeholder="Amount" type="number" step="1" defaultValue={10000} />
                            </InputGroup>
                        </Col>
                        <Button>Save</Button>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Current Amount</Label>
                        <Col sm={3}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input style={{ color: '#666', backgroundColor: '#e9ecef' }} type="number" name="currentAmount" id="exampleEmail" defaultValue="0.00" readOnly />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>Balancing Difference</Label>
                        <Col sm={3}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input style={{ color: 'red', backgroundColor: '#e9ecef' }} type="number" name="balanceDifference" id="balanceDifference" defaultValue="12312.00" readOnly />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </div>

                <hr />
                <h5 style={{ color: '#666', fontWeight: 'bold' }}>Scanned Items</h5>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                {headers.map(header => (
                                    <TableCell key={header} align="center">{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow key={row[0]}>
                                    {row.map(cell => (
                                        <TableCell key={cell} align="center">{cell}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </Paper>
                {this.state.qrcode ? <QRCODE value={this.state.socketId} /> : null}
                {this.state.imageReady ? <img src={`data:image/jpeg;base64,${this.state.imageData}`} /> : null}
            </div>
        );
    }
}

export default withStyles(useStyles)(DepositListItem);
