import React from "react"
import { graphql } from "gatsby"
import Banner from "../components/banner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
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
                <Banner title={frontmatter.title}  subtitle={frontmatter.date}/>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{textAlign: 'center', justifyContent: 'center',  display:'flex', flexDirection:'row'}}>
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
        link
      }
    }
  }
`

