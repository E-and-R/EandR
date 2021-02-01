import React from "react"
import "../styles/styles.scss"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import LandingPageBanner from "../components/landingpagebanner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles'
import {Grid, Typography, Hidden, makeStyles,List, ListItem, ListItemIcon,ListItemText,Button } from '@material-ui/core'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"; 

const useStyles = makeStyles(() => ({
  tablelist:{
    display: 'table',
    margin: '0 auto',
},
text:{
  background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
},
button:{
  backgroundImage: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
  color: 'white'
  }

}));

export default function IndexPage(){
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      desktopDev: file(relativePath: { eq: "desktopDev.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      websiteDev: file(relativePath: { eq: "websiteDev.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      UiandUxDesign: file(relativePath: { eq: "Ui&UxDesign.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mobileDev: file(relativePath: { eq: "appDev.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      fullLogo: file(relativePath: { eq: "fullLogo.png" }) {
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
      
      <ThemeProvider theme={Theme}>
           <div >
            <SEO title="Home" />
            <Header/>
            <LandingPageBanner 
              title={"Don't Waste Anymore\nLight-Bulb\nMoments"} 
              subtitle="At Einstein and Robin we are in the business of assisting you maximise your light-bulb moments. Get in touch with us today and let us convert those ideas into results."
            />
            <Grid container spacing={2} style={{textAlign: 'center', justifyContent:'center', padding:'0 5px'}}>
                <Grid item xs='12' md='6'  style={{textAlign: 'center'}}>
                    <Typography variant='h3' className={classes.text}>Einstein and Robin</Typography>
                    <Typography variant='h6'>Est. 2020</Typography>
                    <Typography variant='body1'>We are a software development house that specialises in building software that runs on the net, mobile phones or desktops. We pride ourselves on not just building software that exceeds client expectations but also building software that matters and solves business problems. At E and R we believe time is money hence we also pride ourselves on delivering on time everytime.  </Typography>
                </Grid>
                <Grid item xs='12' md='6' style={{margin: 'auto'}}>
                  <Img fixed={data.fullLogo.childImageSharp.fixed} alt="company logo"/>
                </Grid>
                <Grid item xs='12' md='12'  style={{textAlign: 'center'}}>
                  <Typography variant='h3' className={classes.text}>Services We Offer</Typography>
                </Grid>
                <Hidden smDown>
                  <Grid item xs='12' md='6'>
                    <Img  fixed={data.websiteDev.childImageSharp.fixed} alt="Web Development"/>
                    <Typography variant='h5'>Website Development</Typography>
                    <Typography variant='body1'> </Typography>
                  </Grid>
                  <Grid item xs='12' md='6'>
                    <Img fixed={data.mobileDev.childImageSharp.fixed} alt="mobile Development"/>
                    <Typography variant='h5'>Mobile App Development</Typography> 
                  </Grid>
                  <Grid item xs='12' md='6'>
                    <Img fixed={data.desktopDev.childImageSharp.fixed} alt="Desktop Application"/>
                    <Typography variant='h5'>Desktop App Development</Typography>
                  </Grid>
                  <Grid item xs='12' md='6'>
                    <Img fixed={data.UiandUxDesign.childImageSharp.fixed} alt="UI and UX Design"/>
                    <Typography variant='h5'>UI & UX Design</Typography>
                  </Grid>
                  <Grid item xs='12' md='6'>
                    <Button className={classes.button} variant='contained' href='/services'> View full services</Button>
                  </Grid>
                  
                </Hidden>

                <Hidden mdUp>
                  <Grid item xs='12'>
                      <List className={classes.tablelist}>
                        <ListItem>
                          <ListItemText primary="Website Development"/>
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Mobile App Development"/>
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="Desktop App Development"/>
                        </ListItem>
                        <ListItem>
                          <ListItemText primary="UI and UX Design"/>
                        </ListItem>
                        <Button className={classes.button} variant='contained' href='/services'> View full services</Button> 
                      </List>
                  </Grid>
                </Hidden>
            </Grid>
           
            <Footer/>
          </div>
      </ThemeProvider>
     
    
  
    )
}


