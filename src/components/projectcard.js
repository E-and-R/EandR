import React from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography';
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: 405,
  },
  media: {
    height: 300,
  },
  cardbackground:{
    background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
  }
});


export default function ProjectCard(props){
    const classes = useStyles();
    return(
      <ThemeProvider theme={Theme}>

            <Card style={{width:'100%', textAlign: 'center'}} className={classes.cardbackground}>
                <CardActionArea >
                    <CardMedia  className={classes.media} title={props.imagetitle} image={props.image} />
                    <CardContent>
                        <Typography variant='h4' style={{color:'#fff'}}>{props.title}</Typography>
                        <Typography variant='h6' style={{color:'#fff'}}>{props.subtitle}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </ThemeProvider>
    )
    
}
