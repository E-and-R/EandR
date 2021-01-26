import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
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
                            <Link href="/servlink" underline='none' style={{width:'95%'}}><ProjectCard  imagetitle={'Servlink'} title={'Servlink UI Design'} subtitle={'#UI #UX #Design #mobileApp'} image={servlink}/></Link>
                        </Grid>
                        <Grid item md={4} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
                            <Link href="/servlink" underline='none' style={{width:'95%'}}><ProjectCard imagetitle={'PersonalWebsite'} title={'Personal Website'} subtitle={'#WebDevelopment #React '} image={vhulenda}/></Link>
                        </Grid>
                        <Grid item md={4} xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
                            <Link href="/servlink" underline='none' style={{width:'95%'}}><ProjectCard imagetitle={'Web Scraping'} title={'Website Cloner'} subtitle={'#Python #BeautifulSoup '} image={webcloner}/></Link>
                        </Grid>
                    </Grid>
                    
                    <Footer/>
                </div>
            </ThemeProvider>
        </Router>
    )
};