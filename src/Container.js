import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const ContainerBox = (props) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', marginTop: '10px', marginBottom: '10px' }} >
                    {props.children}
                </Typography>
            </Container >
        </React.Fragment >
    )
}

export default ContainerBox;
