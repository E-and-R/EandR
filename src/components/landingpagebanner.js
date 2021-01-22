import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import SEO from "../components/seo"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import { Typography, Grid, Hidden, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      newLine:{
          whiteSpace: "pre-wrap", //ensuring that \n forms a new line
      },
      button:{
        backgroundImage: 'linear-gradient(to top, rgba(255,255,255), rgba(3,147,218,1))',
        }
}));



export default function LandingPageBanner(props){
    const classes = useStyles();
    const data = useStaticQuery(graphql`
    query {
      landingwomen: file(relativePath: { eq: "lightbulbwomen.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      landingman: file(relativePath: { eq: "lightbulbman.png" }) {
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
        <ThemeProvider theme={Theme}>
            <div class="banner"> 
                <h1></h1>
                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>
                        <Typography variant="h2" className={classes.newLine} style={{padding:'0 5px', textAlign: 'center'}}>{props.title}</Typography>
                        <br/><br/>
                        <Typography variant="body1" style={{ textAlign: 'center',padding:'0 20px'}}>{props.subtitle}</Typography>
                        <br/><br/><br/>
                        <Button size='large' variant="contained" className={classes.button}>Get In Touch</Button>
                    </Grid>
                    <Hidden xsDown>
                        <Grid item md={4} xs={12}>
                            <Img fixed={data.landingwomen.childImageSharp.fixed} />
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item md={4} xs={12}>
                            <Img fixed={data.landingman.childImageSharp.fixed} style={{width:'95%'}} />
                        </Grid>
                    </Hidden>
                    
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