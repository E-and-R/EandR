import React from "react"
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
      maxWidth: 405,
    },
    media: {
      height: 330,
      
      
    },
    cardbackground:{
     
    }
  });

export default function HomeServiceCard(props){
    const classes = useStyles();
    return(
        
        <Card style={{width:'100%', textAlign: 'center'}} className={classes.cardbackground}>
            <CardActionArea >
                <CardMedia  className={classes.media} title={props.imagetitle} image={props.image} />
                <CardContent>
                    <Typography variant='h4' style={{color:'#000'}}>{props.title}</Typography>
                    <Typography variant='h6' style={{color:'#fff'}}>{props.subtitle}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        
    )
}