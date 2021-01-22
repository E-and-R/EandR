import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';
import SEO from "../components/seo"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      newLine:{
          whiteSpace: "pre-wrap", //ensuring that \n forms a new line
      }
}));



export default function Banner (props){
    const classes = useStyles();
    return(
        <ThemeProvider theme={Theme}>
            <div class="banner"> 
                <h1></h1>
                <Typography variant="h1" className={classes.newLine}>{props.title}</Typography>
                <Typography variant="h4">{props.subtitle}</Typography>
                <div class="wave-top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,181.3C672,213,768,235,864,218.7C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                </div>     
            </div>
        </ThemeProvider>
    )

}