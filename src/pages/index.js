import React from "react"
import { Link, graphql } from 'gatsby'
import "../styles/styles.scss"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import LandingPageBanner from "../components/landingpagebanner"
import { makeStyles } from '@material-ui/core/styles';
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles'
import { Grid, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
    
  },
}));

const IndexPage = () => (
  
    <ThemeProvider theme={Theme}>
      <div >
        <SEO title="Home" />
        <Header/>
        <LandingPageBanner title={"Don't Waste Anymore\nLight-Bulb\nMoments"} subtitle="At Einstein and Robin we are in the business of assisting you maximise your light-bulb moments. Get in touch with us today and let us convert those ideas into results."/>
        <Footer/>
      </div>
    </ThemeProvider>
  
)

export default IndexPage
