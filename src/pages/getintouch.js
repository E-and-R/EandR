import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Footer from "../components/footer"
import Header from "../components/header"
import ProjectForm from "../components/projectform"
import RequestCallForm from "../components/requestcallform"
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        
        
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      text:{
        background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
            
  }));

  
export default function Getintouch(){
    const classes = useStyles();
    return(
        
            <ThemeProvider theme={Theme}>
                <div className={classes.root}>
                    <Header/>
                    <Banner title={'Get In Touch'}  subtitle="A safe place to bounce off ideas and for general enquiries"/>
                    <Grid container spacing={1} >
                        <Grid item md={4} xs={12} style={{textAlign:'center'}}>
                            <Typography variant="h4" className={classes.text} >Get In Touch</Typography>
                            <br/>
                            <ProjectForm/>
                        </Grid>
                        <Grid item md={4} xs={12} style={{textAlign:'center'}}>
                            <Typography variant="h4" className={classes.text} >Request A Call</Typography>
                            <br/>
                            <RequestCallForm/>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Typography variant="h4" className={classes.text} >Don't Hesitate To Reach Out</Typography>
                            <br/>
                            <Typography  variant="h5" className={classes.text} >-- Email</Typography>
                            <Typography variant='body1'>&emsp;&emsp;info@einsteinandrobin.com</Typography>
                            <Typography variant="h5" className={classes.text}>-- Contact number</Typography>
                            <Typography variant='body1'>&emsp;&emsp;+27 79 493 5197</Typography>
                            <Typography variant='body1'>&emsp;&emsp;+268 7644 2279</Typography>
                        </Grid>
                    </Grid>
                    <Footer/>
                </div>
            </ThemeProvider>
        
    )
}