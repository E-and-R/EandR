import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { List, ListItem, ListItemIcon, ListItemText,ListSubheader } from "@material-ui/core";
import Footer from "../components/footer"
import Header from "../components/header"
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles'

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
                        <Grid item  style={{textAlign: 'center'}}  md={6} xs={12}>
                            <Img fixed={data.logofull.childImageSharp.fixed} style={{width:'90%' ,height:'100%'}}/>
                        </Grid>
                        <Grid item  style={{textAlign: 'center', verticalAlign:'middle'}} md={6} xs={12}>
                            <Typography variant='h2' className={classes.text}>The Name</Typography>
                            <Typography variant='body1'  style={{textAlign: 'left', padding:'0 10px'}} >Co-founder Sindiso Mkhantswa nicknamed <b>Einstein</b>. The name <b>Robin</b> refers to the Batman's sidekick. The name came about when registering 
                                for a programming competition were fellow Co-founder Junior Moraba was going to be a sidekick
                                to Einstein since the programming language of choice was C++ which he is not familiar with
                                at the time. When we started the company we decided to use the same name because it never
                                got the change to fly due to that competition being cancelled.</Typography>
                        </Grid>
                        <Grid item  style={{textAlign: 'center'}} md={12} xs={12}>
                            <Typography variant='h2' className={classes.text}>Who Are We</Typography>
                        </Grid>
                        <Grid item md={6} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', padding:'0 20px'}}>
                            <Grid item  style={{textAlign: 'center'}} md={4} xs={12}>
                                <Img fixed={data.eandr2.childImageSharp.fixed} style={{width:'250px', height:'290px'}}/>
                            </Grid>
                            <Grid item  style={{textAlign: 'center'}} md={8} xs={12}className={classes.cardbackground} >
                                <Typography variant='h5' style={{color:'#fff'}}>Sindiso 'Einstein' Mkhantswa</Typography>
                                <Typography variant='body'  style={{color:'#fff'}}>BEng Electrical and Computer Engineering (UCT)</Typography>
                                
                                <List subheader={<ListSubheader component="div"   style={{color:'#fff'}}>3 Facts about Einstein</ListSubheader>} className={classes.tablelist}>
                                    <ListItem>
                                        <ListItemText  style={{color:'#fff'}}>Jaywalker</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText  style={{color:'#fff'}}>Swaziland Throne Heir</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText  style={{color:'#fff'}}>Registerd for Masters in 2021-2022</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>    
                        </Grid>                    
                        <Grid item md={6} xs={12}  style={{textAlign: 'center', justifyContent: 'center',  display:'flex' , padding:'0 20px'}}>
                            <Grid item  md={4} xs={12}>
                                <Img fixed={data.junior.childImageSharp.fixed} style={{width:'250px', height:'290px'}}/>
                            </Grid>
                            <Grid item  md={8} xs={12} >
                                <Typography variant='h5'>Junior 'Robin' Moraba</Typography>
                                <Typography variant='body'>BCom Computer Science and Information Systems (UCT)</Typography>

                                <List subheader={<ListSubheader component="div" color='inherit'>3 Facts about Robin</ListSubheader>} className={classes.tablelist}>
                                    <ListItem>
                                        <ListItemText>Takes Fifa Personal</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Nightowl</ListItemText>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>Registerd for Honours in 2021</ListItemText>
                                    </ListItem>
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
};