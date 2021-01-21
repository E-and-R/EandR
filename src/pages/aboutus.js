import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { List, ListItem, ListItemIcon, ListItemText,ListSubheader, Hidden,Avatar } from "@material-ui/core";
import Footer from "../components/footer"
import Header from "../components/header"
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles'
import einstein from '../images/eandr1.jpg'
import WhoAreWeCard from '../components/whoarewecard'
import vhulenda from '../images/personalWebsite.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      tablelist:{
        display: 'table',
        margin: '0 auto',
    },
    cardbackground:{
        background: 'linear-gradient(to right, rgba(0,0,0), rgba(3,147,218,1))',
    },
    text:{
        background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }
  }));

  
export default function Aboutus(){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query {
      junior: file(relativePath: { eq: "personalWebsite.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eandr2: file(relativePath: { eq: "eandr2.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logo: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      logofull: file(relativePath: { eq: "fullLogo.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`);
    
    return(
        <Router>
            <ThemeProvider theme={Theme}>
                <div className={classes.root}>
                    <Header/>
                    <Banner title={'About Einstein & Robin'}  subtitle="Just two folks trying to bring african ideas to the world stage"/>
                    <Grid container spacing={2}>
                        <Hidden xsDown>
                          <Grid item  style={{textAlign: 'center'}}  md={6} xs={12}>
                              <Img fixed={data.logofull.childImageSharp.fixed} style={{width:'90%' ,height:'100%'}}/>
                          </Grid>
                        </Hidden>
                        <Grid item  style={{textAlign: 'center', verticalAlign:'middle'}} md={6} xs={12}>
                            <Typography variant='h3' className={classes.text}>The Name</Typography>
                            <Typography variant='body1'  style={{textAlign: 'center', padding:'0 10px'}} >Co-founder Sindiso Mkhantswa nicknamed <b>Einstein</b>. The name <b>Robin</b> refers to the Batman's sidekick. The name came about when registering 
                                for a programming competition were fellow Co-founder Junior Moraba was going to be a sidekick
                                to Einstein since the programming language of choice was C++ which he is not familiar with
                                at the time. When we started the company we decided to use the same name because it never
                                got the change to fly due to that competition being cancelled.</Typography>
                        </Grid>
                        <Grid item  style={{textAlign: 'center', }} md={12} xs={12}>
                            <Typography variant='h3' className={classes.text}>Who Are We</Typography>
                        </Grid>
                        <Grid item md={6} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}} >
                            <WhoAreWeCard className={classes.cardbackground} name={"Sindiso 'Einstein' Mkhantswa"} qualification={"BEng Electrical and Computer engineering"}
                                          about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                          imagetitle={"Einstein"}
                                          image={einstein}/>
                        </Grid>
                        <Grid item md={6} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}} >
                            <WhoAreWeCard name={"Junior 'Robin' Moraba"} qualification={"BCom Computer science and Information Systems"}
                                          about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                          imagetitle={"Robin"}
                                          image={vhulenda}/>
                        </Grid>
                        <Grid item  style={{textAlign: 'center' }} md={12} xs={12}>
                            <Typography variant='h3' className={classes.text}>Our Story</Typography>
                        </Grid>  
                        <Grid item md={12} xs={12} style={{textAlign: 'center', marginLeft:'40px', marginRight:'40px'}} >
                          <Typography variant='body1' >
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </Typography>
                        </Grid>
                        
                    </Grid>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
};