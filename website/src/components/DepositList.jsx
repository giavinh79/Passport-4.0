import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
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

export default function DepositList() {
  const classes = useStyles();

  return (
    <div style={{padding: '0 2rem', width: '100%'}}>
        <h1 style={{color: '#666'}}>Deposit List</h1>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    {headers.map(header => (
                      <TableCell  key={header} align="center">{header}</TableCell>
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
        <div style={{textAlign: 'right'}}>
            <Button variant="outlined" color="primary" className={classes.button} style={{borderColor: 'green', color: 'green', margin: '1rem 0rem 1rem 0'}}>
                Create new deposit
            </Button>
        </div>
    </div>
  );
}