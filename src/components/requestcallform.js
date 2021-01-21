import React from "react";
import {useForm} from "react-hook-form";
import { Button } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      background: "white"
    },
    input: {
      color: "black"
    }
  };

const useStyles = makeStyles((theme) => ({

    button:{
    backgroundImage: 'linear-gradient(to top, rgba(0,0,0), rgba(3,147,218,1))',
    }
        
}));
  

const RequestCallForm = (props) =>{
    const {register} = useForm();
    
    const {classes} = props;
    const mystyles = useStyles();
    return(
        <form  method="POST" action="https://formspree.io/f/mknpybdj" style={{textAlign: 'center'}}>
            <TextField variant="filled" label="First name" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="First name" ref={register({required: true, maxLength: 80})} /><br/>
            <TextField variant="filled" label="Mobile number" type="tel" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="Phone Number" ref={register({required: true, maxLength:10, minLength: 10})} /><br/>
            <Button type="submit" variant="contained" style={{marginBottom: '10px',marginTop: '10px', width:'40%', color:'#fff'}} className={mystyles.button}>Request call</Button>
            
        </form>
    );
}
RequestCallForm.propTypes={
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RequestCallForm);

//Some CSS required to make this look fancy and stuff