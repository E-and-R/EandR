import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"; 
import { Hidden, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import Footer from "../components/footer"
import Header from "../components/header"
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import {FaApple, FaReact, FaWordpress, FaShopify, FaAndroid, FaFigma} from 'react-icons/fa';
import {SiAdobexd} from 'react-icons/si';

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    tablelist:{
      display: 'table',
      margin: '0 auto',
    },
    text:{
      background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
}));



export default function Services(){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query {
      webdev: file(relativePath: { eq: "webdev.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobiledev: file(relativePath: { eq: "mobiledev.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      design: file(relativePath: { eq: "design.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`)
    return(
      <Router>
        <ThemeProvider theme={Theme}>
          <div className={classes.root}>
              <Header/>
              <Banner title={'Services'}  subtitle="Your idea’s + Our expertise = A Giant leap to a better tommorow"/>
              <Grid container  spacing={3}>
                  <Grid item style={{textAlign: 'center'}}  md={6} xs={12}>
                      <Img fixed={data.webdev.childImageSharp.fixed} alt="web development"/>
                  </Grid>
                  <Grid item style={{textAlign:'center'}} md={6}  xs={12} >
                      <Typography  variant="h3" className={classes.text}>Web Development</Typography>
                      <Typography  variant="h6">From personal websites to E-commerce sites,<br/>You name it, We build it </Typography>
                      <List className={classes.tablelist}>
                        <ListItem>
                            <ListItemIcon>
                                <FaReact style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>React</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FaShopify style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>Shopify</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FaWordpress style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>Wordpress</ListItemText>
                        </ListItem>
                      </List>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}}  md={6} xs={12}>
                      <Typography  variant="h3" className={classes.text}>Mobile Development</Typography>
                      <Typography   variant="h6">The mobile era is here, allow us to help you reach,<br/>Don't be left behind</Typography>
                      <List className={classes.tablelist}>
                        <ListItem>
                            <ListItemIcon>
                                <FaReact style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>React native</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <FaAndroid style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>Android</ListItemText>
                        </ListItem>
                        <ListItem>
                              <ListItemIcon>
                                <FaApple style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>iOS</ListItemText>
                        </ListItem>
                      </List>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}}  md={6} xs={12}>
                    <Img fixed={data.mobiledev.childImageSharp.fixed} alt="mobile development"/>
                  </Grid>
                  <Hidden xsDown>
                    <Grid item style={{textAlign: 'center'}}  md={6} xs={12}>
                        <Img fixed={data.design.childImageSharp.fixed} alt="UI and UX Design"/>
                    </Grid>
                  </Hidden>
                  <Grid item style={{textAlign:'center'}}  md={6} xs={12}>
                      <Typography  variant="h3" className={classes.text}>UI & UX Design</Typography>
                      <Typography  variant="h6">Visualise how your idea makes this world a better place</Typography>
                      <List className={classes.tablelist}>
                        <ListItem>
                           <ListItemIcon>
                                <FaFigma style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>Figma</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <SiAdobexd style={{color: '#0393DA', width:'40px', height: '40px'}}/>
                            </ListItemIcon>
                            <ListItemText>Adobe XD</ListItemText>
                        </ListItem>
                      </List>
                  </Grid>
              </Grid>
              <Footer/>
          </div>
        </ThemeProvider>
      </Router>
    )
}