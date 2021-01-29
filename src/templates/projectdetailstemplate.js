import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectDetailsBanner from "../components/projectdetailsbanner"
import Theme from "../components/Theme"
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Footer from "../components/footer"
import Header from "../components/header"
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Typography} from "@material-ui/core";
import SEO from '../components/seo';
import Img from "gatsby-image/withIEPolyfill";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button:{
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    tablelist:{
      display: 'table',
      margin: '0 auto',
    },
    text:{
      background: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  }));

  const Image = ({data, path, alt = "" }) => {
    const image = data.images.edges.find(n => n.node.relativePath.includes(path))
    if (!image) return null
  
    return (
      <Img
        style={{ height: "500px", marginBottom: "30px" }}
        objectFit="contain"
        alt={alt}
        fluid={image.node.childImageSharp.fluid}
      />
    )
  }



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
                <SEO
                  title={frontmatter.title}
                  description={frontmatter.description}
                  image={frontmatter.backgroundimg} 
                  url={frontmatter.slug}
                  
                /> 
                <Header/>
                <ProjectDetailsBanner title={frontmatter.title} details={frontmatter.details} task={frontmatter.task} customer={frontmatter.customer} period={frontmatter.period} backgroundimg={frontmatter.backgroundimg} bannerimg={frontmatter.bannerimg}/>
                <Grid container spacing={2}>
                  
                  <Grid item style={{textAlign: 'center'}}  md={6} xs={12}>
                      <Img fixed={data.problemicon.childImageSharp.fixed} alt="Problem Statement"/>
                  </Grid>
                  <Grid item style={{textAlign:'center'}} md={6}  xs={12} >
                      <Typography  variant="h3" className={classes.text}>Objective</Typography>
                      <Typography  variant="body1" style={{textAlign:'left'}}>{frontmatter.problemstatement}</Typography>
                  </Grid>
                  
                  <Grid item style={{textAlign: 'center'}}  md={12} xs={12}>
                      <Grid item style={{textAlign: 'center'}} md={12} xs={12}>
                        <Typography  variant="h3" className={classes.text}>Outcome</Typography>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                          <Image data={data} path={frontmatter.resultimg1a}/>
                        </Grid>
                        <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                          <Image data={data} path={frontmatter.resultimg1b}/>
                        </Grid>
                        <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                          <Image data={data} path={frontmatter.resultimg1c}/>
                        </Grid>
                    </Grid>
                  </Grid>
                  

                  <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                        <Img fixed={data.resulticonb.childImageSharp.fixed} alt="ResultIconB"/>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}} md={8} xs={12}>
                    <Image data={data} path={frontmatter.resultimg2}/>
                  </Grid>
                        
                  <Grid item style={{textAlign: 'center'}} md={8} xs={12}>
                    <Image data={data} path={frontmatter.resultimg3}/>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                        <Img fixed={data.resulticonc.childImageSharp.fixed} alt="ResultIconC"/>
                  </Grid>

                  <Grid item style={{textAlign: 'center'}}  md={4} xs={12}>
                        <Img fixed={data.resulticond.childImageSharp.fixed} alt="ResultIconD"/>
                  </Grid>
                  <Grid item style={{textAlign: 'center'}} md={8} xs={12}>
                    <Image data={data} path={frontmatter.resultimg4}/>
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
        date
        slug
        title
        details
        task
        customer
        period
        bannerimg
        link
        problemstatement
        resultimg1a
        resultimg1b
        resultimg1c
        resultimg2
        resultimg3
        resultimg4
      }
    }
    problemicon: file(relativePath: { eq: "problemstatement.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    resulticona: file(relativePath: { eq: "resulticona.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    resulticonb: file(relativePath: { eq: "resulticonb.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    resulticonc: file(relativePath: { eq: "resulticonc.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    resulticond: file(relativePath: { eq: "resulticond.png" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    images: allFile {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

