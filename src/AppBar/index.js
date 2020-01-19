import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AddorRemoveAttributes from '../AddorRemoveAttributes';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));

function AppBarComponent({ attributes, updateAttributes }) {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}></Typography>
                    <Button variant="outlined" color="inherit" onClick={handleClickOpen}>
                        <EditIcon /> &nbsp;&nbsp; Add/Remove Attributes
                    </Button>

                    <AddorRemoveAttributes
                        attributes={attributes}
                        updateAttributes={updateAttributes}
                        open={open}
                        handleClose={handleClose} />

                </Toolbar>
            </AppBar>
            <CssBaseline />
        </div>
    )
}

export default AppBarComponent;