import React from "react"
import "../styles/styles.scss"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Box, List, ListItem, ListItemIcon,ListItemText } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import Form from "../components/footerform"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import {FaMedium} from 'react-icons/fa';

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
      }
}));



export default function Footer(){
    const classes = useStyles();
    return(
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
                <div class="footer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,181.3C672,213,768,235,864,218.7C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    <Grid container spacing={3}>
                        <Grid item justify="center" style={{textAlign: 'center'}} md={4} xs={12}>
                            <Typography variant="h4" component="h4">Follow Us</Typography>  
                            <List className={classes.tablelist} component="nav" aria-label="Social media accounts">
                                <ListItem button component="a" href="https://github.com/E-and-R" target="_blank">
                                    <ListItemIcon >
                                        <GitHub color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Github"/>
                                </ListItem>
                                <ListItem button component="a" href="https://medium.com/@einstein.and.robin" target="_blank">
                                    <ListItemIcon >
                                        <FaMedium style={{color: '#0393DA', height: '25px', width: '25px'}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Medium"/>
                                </ListItem>
                                <ListItem button component="a" href="https://www.facebook.com/Einstein-and-Robin-102521721846393" target="_blank">
                                    <ListItemIcon>
                                        <Facebook  color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Facebook"/>
                                </ListItem>
                                <ListItem button component="a" href="https://twitter.com/einstein_robin" target="_blank" alignItems="center">
                                    <ListItemIcon>
                                        <Twitter  color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary="Twitter"/>
                                </ListItem>
                                <ListItem button component="a" href="https://linkedin.com/company/einstein-and-robin-inc" target="_blank" alignItems="center">
                                    <ListItemIcon>
                                        <LinkedIn  color="primary"/>
                                    </ListItemIcon>
                                    <ListItemText primary="LinkedIn"/>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item  md={4} xs={12}>
                            <Typography variant="h5" component="h5">“No idea is too small, and all sorts of ideas have potential to change the world as we know it for the better.” - Richard Branson</Typography>
                        </Grid>
                        <Grid item  md={4} xs={12}>
                            <Typography variant="h4" component="h4">Get In Touch</Typography>
                            <Form/>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        </ThemeProvider>
        
       
    )

}
