import { Container, 
        Button, 
        Grid, 
        TextField,        
} from "@material-ui/core";
// import { Menu as MenuIcon } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import React,{ useState } from "react";
import axios from 'axios';
import ErrorSpan from "./ErrorSpan";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));


const Login = () => {
let error =false;
const classes = useStyles();
const [usernameReg, setUsernameReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");
const [emailReg, setEmailReg] = useState("");
const handleUser = (e) =>{
  setUsernameReg(e.target.value);
  // console.log("user",usernameReg);
}
const handleEmail = (e) =>{
  setEmailReg(e.target.value);
  //  console.log("user",emailReg);
}
const handlePass = (e) =>{
  setPasswordReg(e.target.value);
  // console.log(passwordReg);
}
const onsubmit = (e) =>{
    const reg =   {
    userName: usernameReg,
    email: emailReg,
    password: passwordReg
  }
  axios.post('http://localhost:4000/signup',reg)
          .then(respose => window.location='/signin')
          .catch(error => console.log(error))
   
}
  return(
    <Container className={classes.container} maxWidth="sm">
      
        <Grid container spacing={2}>
        <Grid item xs={12}>
            <TextField fullWidth label="Username" name="Username" size="small" variant="outlined" onChange={handleUser} />
            
          </Grid>
        <Grid item xs={12}>
            <TextField fullWidth label="Email" name="email" size="small" variant="outlined" onChange={handleEmail}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              size="small"
              type="password"
              variant="outlined"
              onChange={handlePass}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="secondary" onClick={onsubmit} fullWidth type="submit" variant="contained">
              Sign Up
            </Button>
          </Grid>
        </Grid>

    </Container>
  )
}

export default Login;