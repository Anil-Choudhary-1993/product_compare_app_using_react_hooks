import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
    },
    cell: {
        fontSize: 14,
        fontWeight: "bold",
        padding: 10,
        textAlign: 'inherit'
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: 400,
        maxWidth: '98%',
        margin: 10
    },
    dot: {
        height: 10,
        width: 10,
        marginLeft: 2,
        marginRight: 2,
        borderRadius: '50%',
        display: 'inline-block'
    },
    button: {
        backgroundColor: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '10px 20px',
        textAlign: 'center',
        textdDecoration: 'none',
        display: 'inline-block',
        fontSize: 15,
        margin: '4px 2px',
        cursor: 'cursor'
    }
});

function Result({ attributes, products }) {
    const classes = useStyles();
    if (!products.length || attributes.every(o => o.check === false)) { return null }
    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {
                            products.map((prod, index) => (<TableCell key={index} className={classes.cell} align="right">{prod.name}</TableCell>))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        attributes.filter(v => v.check).map((attr, index) => {
                            return (
                                <TableRow key={attr.id}>
                                    <TableCell component="th" scope="row">
                                        {attr.name}
                                    </TableCell>
                                    {
                                        products.map((prod, index) => {
                                            let data = prod[attr.name.toLowerCase()];
                                            if (attr.name.toLowerCase() === "condition") {
                                                data = (<button
                                                    className={classes.button}
                                                    style={{ opacity: data.toLowerCase() === "frozen" ? 1 : 0.5 }}                                                >
                                                    {data}
                                                </button>)
                                            }
                                            if (Array.isArray(data)) {
                                                if (attr.name.toLowerCase() === "colors") {
                                                    data = data.map((d, index) => (<span key={index} style={{ backgroundColor: d }} className={classes.dot} />))
                                                } else {
                                                    data = data.join(', ')
                                                }
                                            }
                                            return (
                                                <React.Fragment key={index}>
                                                    <TableCell component="th" scope="row">
                                                        {data}
                                                    </TableCell>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default Result;