import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import SEO from "../components/seo"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      newLine:{
          whiteSpace: "pre-wrap", //ensuring that \n forms a new line
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.primary,
      },
}));



export default function ProjectDetailsBanner (props){
    const classes = useStyles();
    return(
        <ThemeProvider theme={Theme}>
            <div class="banner"> 
                <h1></h1>
                

                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <Typography variant="h2" className={classes.newLine} style={{padding:'0 50px', textAlign: 'left'}}>{props.title}</Typography>
                        <Typography variant="h5" style={{ textAlign: 'left',padding:'0 50px'}}>{props.details}</Typography>
                        <br/>
                    </Grid>
                </Grid>


                <Grid container spacing={1}>
                    <Grid item xs={6} sm={2}>
                        <Typography gutterBottom variant="h6" style={{ textAlign: 'left',padding:'0 50px'}}>
                            Task
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ textAlign: 'left',padding:'0 50px'}}>
                            {props.task} 
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Typography gutterBottom variant="h6" style={{ textAlign: 'left'}}>
                            Customer
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ textAlign: 'left'}}>
                            {props.customer}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={2}>
                        <Typography gutterBottom variant="h6" style={{ textAlign: 'left'}}>
                            Period
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{ textAlign: 'left'}}>
                            {props.period}   
                        </Typography>
                    </Grid>
                    
                </Grid>
                <div class="wave-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,181.3C672,213,768,235,864,218.7C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>     
            </div>
        </ThemeProvider>
    )

}