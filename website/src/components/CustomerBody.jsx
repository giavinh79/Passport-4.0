import React from 'react'
import { Grid, Paper, Table, TableHead, TableRow, TableCell, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export class CustomerBody extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [
                {
                    id: 0,
                    customerId: "ATMCUSTOMER",
                    customerName: "ATM Customer",
                    businessAddress: "45454 That Street"
                },
                {
                    id: 1,
                    customerId: "KIPCANADA",
                    customerName: "KIP Canada",
                    businessAddress: "23 Naylor Street"
                },
                {
                    id: 2,
                    customerId: "LUXURJEWELRY",
                    customerName: "Luxur Jewelry",
                    businessAddress: "522 Kitchener Dr"
                },
                {
                    id: 3,
                    customerId: "RIVERSIDEGASBAR",
                    customerName: "Riverside Gas Bar",
                    businessAddress: "62 Symbchuk Ave"
                },
                {
                    id: 4,
                    customerId: "TIMMYSBAKERY",
                    customerName: "Timmy's Bakery",
                    businessAddress: "230 54th Street E."
                },
            ],
            deleted: []
        }
    }

    filterRows = () => {
        const { rows, deleted } = this.state
        console.log(deleted)
        return rows.filter(row => {
            return !deleted.includes(row.id)
        })
    }

    addDeleted = (id) => {
        let { deleted } = this.state
        deleted.push(id)
        this.setState({ deleted })
    }

    render() {
        return (
            <Grid container style={{ padding: '3vh 3vh 0 3vh' }}>
                <Grid item xs={12} style={{ marginBottom: '3vh' }}>
                    <h1>Customers</h1>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Task</TableCell>
                                    <TableCell>Customer UID</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Business Address</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableHead>
                                {this.filterRows().map(row => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                <IconButton>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => { this.addDeleted(row.id) }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>{row.customerId}</TableCell>
                                            <TableCell>{row.customerName}</TableCell>
                                            <TableCell>{row.businessAddress}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableHead>
                        </Table>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}