import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles(theme => ({
    box: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        fontWeight: 600
    },
    formControl: {
        margin: theme.spacing(3),
    },
    root: {
        display: 'flex',
    },
    textfield: {
        minWidth: 350
    }
}));

function Attributes({ attributes, updateAttributes, open, handleClose }) {

    const classes = useStyles();

    const [selectAll, setSelectAll] = React.useState(attributes.every(o => o.check === true));
    const handleChangeAll = event => {
        setSelectAll(!selectAll);
        setCheckboxes(checkboxes.map(v => ({ ...v, check: !selectAll })))
    };

    const [searchAttribute, setSearchAttribute] = React.useState('');
    const handleSearch = event => {
        setSearchAttribute(event.target.value);
    };

    const [checkboxes, setCheckboxes] = React.useState(attributes);
    const handleMultipleCheckbox = event => {
        const newAttributes = checkboxes.map(o => {
            return {
                ...o,
                check: o.name === event.target.name ? !o.check : o.check
            }
        })
        setCheckboxes(newAttributes)
        setSelectAll(newAttributes.every(o => o.check === true))
    }

    const handleApply = () => {
        updateAttributes(checkboxes);
        setSearchAttribute('')
        handleClose();
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    <span className={classes.title}>{"Add/Remove Attributes"}</span>
                </DialogTitle>
                <DialogContent component="div">
                    <DialogContentText component="div" id="alert-dialog-description">
                        <div className={classes.box}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<TextField id="outlined-search"
                                            className={classes.textfield}
                                            value={searchAttribute} onChange={handleSearch} label="Search Attributes" type="search" variant="outlined" />} />
                                </FormGroup>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox checked={selectAll} onChange={handleChangeAll} value={selectAll} color="primary" />}
                                        label="Select All" />
                                </FormGroup>
                                <hr />
                                {
                                    checkboxes.map(checkboObj => {
                                        let show = !searchAttribute.trim() ? true : (searchAttribute && checkboObj.name.toLowerCase().includes(searchAttribute.toLowerCase().trim()))
                                        return show ? (<FormGroup key={checkboObj.id} >
                                            <FormControlLabel
                                                control={<Checkbox checked={checkboObj.check} onChange={handleMultipleCheckbox} value={checkboObj.check} name={checkboObj.name} color="primary" />}
                                                label={checkboObj.name} />
                                        </FormGroup>) : null
                                    })
                                }
                            </FormControl>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">
                        Cancel
                    </Button>
                    <Button onClick={handleApply} variant="contained" color="primary" autoFocus>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    )
}

export default Attributes;