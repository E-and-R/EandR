import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  media: {
    height: 300,
  },
  cardbackground:{
    background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
  }
}));

export default function WhoAreWeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{width:'90%', textAlign: 'center'}}>
        <Grid container spacing={0}>
            <Grid item xs={12}>
                <CardContent>
                    <Typography  variant="h5"> {props.name} </Typography>
                    <Typography variant="subtitle1" color="textSecondary"> {props.qualification}</Typography>
                </CardContent>
            </Grid>
            <Grid item md={6} xs={12}  >
                <CardMedia className={classes.media} title={props.imagetitle} image={props.image}/>
            </Grid>
            <Grid item md={6} xs={12}>
                <CardContent>
                    <Typography variant='body1' >{props.about}</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </Card>
  );
}
