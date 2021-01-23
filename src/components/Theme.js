import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
    return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({});
const Theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Poppins',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          'serif'
          
        ].join(','),
      },
      palette:{
          primary:{
              main: '#0393DA'
          },
          secondary:{
              main: '#000000'
          }
      },
      breakpoints,overrides :{
        MuiTypography:{
            h1:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(70),
                }
            },
            h2:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(60),
                }
            },
            h3:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(45),
                }
            },
            h4:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(25),
                }
            },
            h5:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(15),
                }
            },
            h6:{
                [breakpoints.down('xs')]:{
                    fontSize: pxToRem(10),
                }
            }

            
        }
      }
  
});

export default Theme
