import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from './Card';

const useStyles = makeStyles({
    group: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

function Cards({ data, selectedData, setSelectedData }) {
    const classes = useStyles();
    return (
        <div className={classes.group}>
            {data.map(obj => (<Card
                key={obj.id}
                data={obj}
                selectedData={selectedData}
                setSelectedData={setSelectedData} />))}
        </div>
    )
}

export default Cards;