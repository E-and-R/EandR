import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer"
import Header from "../components/header"
import { BrowserRouter as Router } from "react-router-dom";
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import ProjectCard from '../components/projectcard';
import servlink from '../images/servlink.png';
import vhulenda from '../images/personalWebsite.jpg';
import webcloner from '../images/jefferson-santos.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
  }));

  
export default function Projects(){
    const classes = useStyles();
    return(
        <Router>
            <ThemeProvider theme={Theme}>
                <div className={classes.root}>
                    <Header/>
                    <Banner title={'Projects'}  subtitle='A musical genius once said "Work Work Work"'/>
                    <Grid container  spacing={2}  >
                        <Grid item md={4} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex'}} >
                            <ProjectCard  imagetitle={'Servlink'} title={'Servlink UI Design'} subtitle={'#UI #UX #Design #mobileApp'} image={servlink}/>
                        </Grid>
                        <Grid item md={4} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
                            <ProjectCard imagetitle={'PersonalWebsite'} title={'Personal Website'} subtitle={'#WebDevelopment #React '} image={vhulenda}/>
                        </Grid>
                        <Grid item md={4} xs={12} >
                            <Grid item xs={12} style={{ justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
                                <ProjectCard imagetitle={'Web Scraping'} title={'Website Cloner'} subtitle={'#Python #BeautifulSoup '} image={webcloner}/>
                            </Grid>
                            <Grid item xs={12} style={{textAlign: 'center'}}>
                                <span>Photo by <a href="https://unsplash.com/@jefflssantos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jefferson Santos</a> on <a href="https://unsplash.com/s/photos/computers?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
};