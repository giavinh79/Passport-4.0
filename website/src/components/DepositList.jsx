import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateDeposit from './CreateDeposit';
import { Grid } from '@material-ui/core';
var socket = require('socket.io-client')('http://localhost:5000');
var QRCODE = require('qrcode.react');

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'scroll',
    },
    table: {
        minWidth: 650,
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

class DepositList extends React.Component {

    state = { qrcode: false }

    handleModal = () => {
        console.log(socket.id)
        // this.setState({ qrcode: true, socketId: socket.id })
        // socket.on('image', (data) => {
        //     console.log(data);
        //     this.setState({
        //         imageReady: true,
        //         imageData: data
        //     })
        // });
    }

    render() {
        const { classes } = this.props

        return (
            <>
                <Grid container style={{ padding: '3vh 3vh 0 3vh' }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <h1 style={{ marginBottom: '3vh' }}>Deposit List</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container justify="flex-end" alignItems="center">
                                    <Grid item>
                                        <Button
                                            onClick={this.handleModal}
                                            variant="outlined"
                                            color="primary"
                                            className={classes.button}
                                            style={{ borderColor: 'green', color: 'green', margin: '1rem 0rem 1rem 0' }}
                                        >
                                            Create new deposit
                                    </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Table>
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
                    </Grid>
                    <Grid item>
                        {this.state.qrcode ? <QRCODE value={this.state.socketId} /> : null}
                        {this.state.imageReady ? <img src={this.state.imageData} /> : null}
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default withStyles(useStyles)(DepositList);
