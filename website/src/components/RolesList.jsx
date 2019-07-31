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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

export default function RolesList() {
  const classes = useStyles();
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "/roles/create-new-role"
  }

  return (
    <div style={{padding: '1rem 2rem', width: '100%'}}>
        <h1 style={{color: '#666'}}>Role Search</h1>
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>Tasks</TableCell>
                    <TableCell align="right">Role Description</TableCell>
                    <TableCell align="right">To Be Assigned To</TableCell>
                    <TableCell align="right">Created By</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map(row => (
                    <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Paper>
        <div style={{textAlign: 'right'}}>
            <Button variant="outlined" color="primary" className={classes.button} style={{borderColor: 'green', color: 'green', margin: '1rem 0rem 1rem 0'}} onClick={handleClick}>
                Create new role
            </Button>
        </div>
    </div>
  );
}