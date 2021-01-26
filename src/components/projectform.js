import React from "react";
import {useForm} from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import { Button, FormControl, FormLabel, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

//used this to change the background color of the textfield
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

const ProjectForm = (props) =>{
    const {register} = useForm();
    const [value, setValue] = React.useState('project');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const {classes} = props;
    const mystyles = useStyles();
    return(
        <form  method="POST" action="https://formspree.io/f/mknpybdj"  style={{textAlign: 'center'}}>
            <TextField variant="filled" label="First name" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="First name" inputRef={register({required: true, maxLength: 80})} /><br/>
            <TextField variant="filled" label="Email" type="text" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}}  name="_replyto"  inputRef={register({required: true, pattern: /^\S+@\S+$/i})} /><br/>
            <FormControl component='fieldset'>
                <FormLabel component='legend' >Choose Message Type</FormLabel>
                <RadioGroup aria-label= "Message Type" name="messageType" value={value} onChange={handleChange}>
                    <FormControlLabel value="project" control={<Radio />} label="Project" />
                    <FormControlLabel value="general" control={<Radio />} label="General enquiry" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
            <TextField variant="filled" label="Message" color='primary' className={classes.root} InputProps={{className: classes.input}} InputLabelProps={{className: classes.input}} FormHelperTextProps={{className: classes.input}} style={{width:'80%'}} placeholder="Type your message here...." type="text" multiline style={{width:'80%'}}  rows={4}  name="Message" inputRef={register({required: true})}/><br/>
            <Button type="submit" variant="contained" className={mystyles.button} style={{marginBottom: '10px',marginTop: '10px', width:'20%', color: 'white' }}>Send</Button>
        </form>
    );
}

ProjectForm.propTypes={
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(ProjectForm);

//Some CSS required to make this look fancy and stuff