import React from "react"
import { graphql } from "gatsby"
import ProjectDetailsBanner from "../components/projectdetailsbanner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button:{
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
    },
  }));


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const classes = useStyles();
  return (
    <Router>
        <ThemeProvider theme={Theme}>
            <div className={classes.root}>
                <Header/>
                <ProjectDetailsBanner title={frontmatter.title} details={frontmatter.details} task={frontmatter.task} customer={frontmatter.customer} period={frontmatter.period}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{textAlign: 'left', justifyContent: 'flex-start',  display:'flex', flexDirection:'row', padding:'0 50px'}}>
                        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    </Grid>
                    <Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
                        <Button className={classes.button}  size='large' style={{color:'#fff'}} variant="contained" href={frontmatter.link} >See full project</Button>        
                    </Grid>
                </Grid>
                <Footer/>
            </div>
        </ThemeProvider>
    </Router>
    
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        details
        task
        customer
        period
        link
      }
    }
  }
`

