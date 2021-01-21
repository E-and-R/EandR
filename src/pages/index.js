import React from "react"
import { Link, graphql } from 'gatsby'
import "../styles/styles.scss"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Banner from "../components/banner"
import { BrowserRouter as Router } from "react-router-dom";
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
  <Router>
    <ThemeProvider theme={Theme}>
      <div >
        <SEO title="Home" />
        <Header/>
        <Banner title={'Einstien\n&\nRobin'}  subtitle="The software Guys"/>
        <Footer/>
      </div>
    </ThemeProvider>
  </Router>
)

export default IndexPage
