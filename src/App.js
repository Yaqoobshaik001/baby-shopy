import './App.css';
import Home from './Components/Login'
import SignIn from './Components/signInPage'
import { Container, 
  Button, 
  AppBar,
  Toolbar,
  Typography,        
} from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const hadlesubmit = () =>{
    window.location='/signup'
  }
  return (
    
    <div className="App">
      <Container className={classes.container}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Baby-Shopy
        </Typography>
        <Button color="inherit" onClick={hadlesubmit}>SignUp</Button>
        <Button color="inherit" onClick={hadlesubmit}>LogIn</Button>
      </Toolbar>
    </AppBar>
    <Router >
    <Switch>
   
      <Route path="/signup">
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn/>
      </Route>

    </Switch>
    </Router>
    </Container>
    </div>
  );
}

export default App;
