import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { PAGES } from '../pages/Dashboard';

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
    ['Frozen yoghurt', 'Bank Admin', 'Bank User', 'Host: Waterloo'],
    ['Frozen yoghurt', 'Bank Reviewer', 'Bank User', 'Host: Waterloo'],
    ['Frozen yoghurt', 'Customer Supervisor', 'Customer User', 'Host: Waterloo']
];

const headers = [
    "Tasks", "Role Description", "To Be Assigned To", "Created By"
]

class RolesList extends React.Component {
    state = { qrcode: false }

    render() {
        const { classes } = this.props

        return (
            <>
                <Grid container style={{ padding: '3vh 3vh 0 3vh' }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={6}>
                                <h1 style={{ marginBottom: '3vh' }}>Roles List</h1>
                            </Grid>
                            <Grid item xs={6}>
                                <Grid container justify="flex-end" alignItems="center">
                                    <Grid item>
                                        <Button
                                            onClick={() => { this.props.change(PAGES.ROLEPAGECREATE)}}
                                            variant="outlined"
                                            color="primary"
                                            className={classes.button}
                                            style={{ borderColor: 'green', color: 'green', margin: '1rem 0rem 1rem 0' }}
                                        >
                                            Create new role
                                    </Button>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{width:'100%'}}>
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
                    {/* <Grid item>
                        {this.state.qrcode ? <QRCODE value={this.state.socketId} /> : null}
                        {this.state.imageReady ? <img src={this.state.imageData} /> : null}
                    </Grid> */}
                </Grid>
            </>
        );
    }
}

export default withStyles(useStyles)(RolesList);
