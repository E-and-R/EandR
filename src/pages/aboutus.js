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
import einstein from '../images/einstein.jpg'
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
      eandr2: file(relativePath: { eq: "einstein.jpg" }) {
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
                          <Grid item  style={{textAlign: 'center'}}  md={4} xs={12}>
                              <Img fixed={data.logofull.childImageSharp.fixed} style={{width:'90%' ,height:'80%'}}/>
                          </Grid>
                        </Hidden>
                        <Grid item  style={{textAlign: 'center', verticalAlign:'middle'}} md={8} xs={12}>
                            <Typography variant='h3' className={classes.text}>The Name</Typography>
                            <Typography variant='body1'  style={{textAlign: 'center', padding:'0 10px'}} >Co-founder, Sindiso Mkhatshwa, is nicknamed <b>Einstein</b> and the name <b>Robin</b> refers to Batman's sidekick. The name came about when registering 
                                for a programming competition where fellow co-founder Junior Moraba was going to be a sidekick
                                to Einstein since the programming language of choice was C++ which he was not familiar with
                                at the time. When we started the company we decided to use the same name because it never
                                got the chance to fly due to that competition being cancelled.</Typography>
                        </Grid>
                        <Grid item  style={{textAlign: 'center', }} md={12} xs={12}>
                            <Typography variant='h3' className={classes.text}>Who Are We</Typography>
                        </Grid>
                        <Grid item md={6} xs={12} style={{textAlign: 'left', justifyContent: 'center',  display:'flex', flexDirection:'row'}} >
                            <WhoAreWeCard className={classes.cardbackground} name={"Sindiso 'Einstein' Mkhatshwa"} qualification={"BSc in Eng in Electrical and Computer Engineering (UCT)"}
                                          about={"An engineering graduate of the University of Cape Town with a strong concentration in Electrical and Computer Engineering. He is skilled in C/C++, Java, Verilog, ARM & MIPS Assembly, Javascript and Python. Moreover, he is well acquainted with FPGAs, MATLAB, Antenna and Controller design, Web design, React-Native and various other tools and technologies.\n"}
                                          imagetitle={"Einstein"}
                                          image={einstein}/>
                        </Grid>
                        <Grid item md={6} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}} >
                            <WhoAreWeCard name={"Junior 'Robin' Moraba"} qualification={"BCom Computer science and Information Systems (UCT)"}
                                          about={"A commerce graduate with an intention apply my business and technical skills to build software that reduces africa dependency of foreign software. Key Competencies include computer programming, problem solving, ability to work in team, business acumen and negotiation. Currently sharpening my skills by pursuing a Bsc Honours in computer science at the university of cape town. "}
                                          imagetitle={"Robin"}
                                          image={vhulenda}/>
                        </Grid>
                        <Grid item  style={{textAlign: 'center' }} md={12} xs={12}>
                            <Typography variant='h3' className={classes.text}>Our Story</Typography>
                        </Grid>  
                        <Grid item md={12} xs={12} style={{textAlign: 'left', marginLeft:'40px', marginRight:'40px'}} >
                          <Typography variant='body1' >
                              Einstein and Robin Inc was founded remotely in August 2020 by Sindiso Mkhatshwa and Junior Moraba. The company has been formed due to a burning desire to bring African ideas to the world stage and slightly motivated by student debt.
                              We intend to bring African ideas to the world stage by leveraging the fourth industrial revolution skills acquired at university and other skills acquired outside of books. <br/><br/><br/>
                              At Einstein and Robin we measure success in two ways, firstly the number of small businesses we are able to assist bring their ideas to fruition and secondly the impact of the inhouse projects on society. <br/><br/>


                          </Typography>
                        </Grid>
                        
                    </Grid>
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
};