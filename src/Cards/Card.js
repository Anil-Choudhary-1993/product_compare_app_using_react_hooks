import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 200,
        maxWidth: 250,
        margin: 20,
        minHeight: 300
    },
    root: {
        height: '45%'
    },
    img: {
        objectFit: 'scale-down',
        height: 140,
    },
    hoverimg: {
        objectFit: 'scale-down',
        opacity: 0.4
    },
    content: {
        paddingTop: 30
    },
    price: {
        display: 'inline',
        position: 'absolute',
        right: 4
    }
});

function CardBox({ data, selectedData, setSelectedData }) {
    const classes = useStyles();
    const updateProductList = (prod) => {
        setSelectedData(prod)
    }
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className="userbox">
                    <CardMedia
                        className={classes.img}
                        component="img"
                        alt={data.name}
                        image={data.image}
                    />
                    <div className="spanHover" onClick={() => updateProductList(data)}>
                        {selectedData.find(v => v.id === data.id) ? 'Remove' : 'Compare'}
                    </div>
                </div>
                <CardContent className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h3">
                        {data.name}
                        <Typography gutterBottom className={classes.price} variant="h5" component="p">
                            {data.price}
                        </Typography>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardBox;