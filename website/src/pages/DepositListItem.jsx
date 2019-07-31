import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Grid } from '@material-ui/core'
import { Button, FormGroup, Label, Input, FormText, Col, Row, InputGroup, InputGroupAddon } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

let url = 'https://passport-redesign-248321.appspot.com'
var socket = require('socket.io-client');
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


const rowTemplate = ['', 'Empty', 'Virtual Credit Item', '15.00', '', '1948285392', '486685766'];
// const rows = [
//     {row:['Frozen yoghurt', '07/10/19 09:55 AM', '000060', 'ACH-ARC', '190 King St, Kitchener, Ontario', 'Check Scanner', '1948****** - Weber Market bank account King St', 'wm_op1', '50.00', '4', 'Open-Incomplete', '3200000000153'], data:{}}
// ];

const headers = [
    "Errors", "Tasks", "Item Type", "Post Amount ($)", "Capture Sequence", "Account", "Routing Transit"
]

class DepositListItem extends React.Component {

    constructor(props) {
        super(props)
        this.handleClickOpen()
        this.state = {
            rows: []
        }
    }

    handleClickOpen = () => {
        this.setState({ open: true })
        let currSocket = socket(url)
        currSocket.on('connect', () => {
            console.log(currSocket, currSocket.id);
            this.setState({ qrcode: true, socketId: currSocket.id })
        });
        currSocket.on('image', (data) => {
            const obj = { row: rowTemplate, data }
            let rows = this.state.rows
            rows.push(obj)
            this.setState({
                imageReady: true,
                open: false,
                rows: rows,
                qrcode: false,
                socketId: undefined
            })
        });
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
                            {this.state.rows.map((obj, index) => (
                                <TableRow onClick={() => this.setState({ showCheque: true, imageData: obj.data })} key={index}>
                                    {obj.row.map(cell => (
                                        <TableCell key={cell} align="center">{cell}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </Paper>

                <Dialog
                    open={this.state.showCheque}
                    keepMounted
                    onClose={() => this.setState({ showCheque: false })}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"This is your check"}</DialogTitle>
                    <DialogContent style={{maxHeight: '800px'}}
>
                        <DialogContentText id="alert-dialog-slide-description">
                            <Grid container justify="center" style={{ padding: '2rem 0' }}>
                                <Grid item>
                                    {this.state.imageReady ? <img style={{ width: '500px', transform: 'rotate(90deg)' }} src={`data:image/jpeg;base64,${this.state.imageData}`} /> : null}
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({ showCheque: false })} color="primary">
                            Dismiss
                    </Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.open}
                    keepMounted
                    onClose={() => this.setState({ open: false })}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Scanner is not connected"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            There is no scanner detected, use your phone to scan QR code.
                        <Grid container justify="center" style={{ padding: '2rem 0' }}>
                                <Grid item>
                                    {this.state.qrcode && this.state.socketId ? <QRCODE value={this.state.socketId} /> : null}
                                </Grid>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({ open: false })} color="primary">
                            Dismiss
                    </Button>
                        <Button onClick={() => this.setState({ open: false })} color="primary">
                            Try Again
                    </Button>
                    </DialogActions>
                </Dialog>

                <div style={{ paddingTop: '10px' }}>
                    <Button onClick={this.handleClickOpen}>Create New Item</Button>
                </div>


                {/* {this.state.qrcode ? <QRCODE value={this.state.socketId} /> : null}
                {this.state.imageReady ? <img src={`data:image/jpeg;base64,${this.state.imageData}`} /> : null} */}
            </div>
        );
    }
}

export default withStyles(useStyles)(DepositListItem);
