import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import '../styling/SignIn.css'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    user: '',
    language: '',
    name: 'hai'
  });

  const handleClick = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    username === 'bank_admin_cm' ? window.location.href = "/dashboard-admin" : window.location.href = "/dashboard"
  }

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Container component="main" maxWidth="xs" style={{paddingBottom: '2rem'}}>
      <CssBaseline />
      <div className={classes.paper} style={{border: '1px solid #ccc', padding: '0.5rem 2rem', borderRadius: '5px'}}>
        <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', color: '#3f51b5', paddingTop: '1rem', cursor: 'pointer'}}><i class="far fa-question-circle" style={{fontSize: '1.4rem'}}></i></div>
        <Avatar className={classes.avatar} style={{backgroundColor: '#51B948', marginBottom: '1.3rem', width: '60px', height:'60px'}}>
          <i className="fas fa-user" style={{color: 'white', fontSize: '1.8rem'}}></i>
        </Avatar>
        <Typography component="h1" variant="h5">
          Passport Web Edition
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem'}}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="user-helper">User Type</InputLabel>
            <Select
              value={values.user}
              onChange={handleChange}
              input={<Input name="user" id="user-helper" />}
            >
              <MenuItem value={10}>Customer</MenuItem>
              <MenuItem value={20}>Bank</MenuItem>
              <MenuItem value={30}>Host</MenuItem>
            </Select>
            <FormHelperText>Select your user type</FormHelperText>
          </FormControl>
          <div style={verticalLine}></div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="language-helper">Language</InputLabel>
            <Select
              value={values.language}
              onChange={handleChange}
              input={<Input name="language" id="language-helper" />}
            >
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>French</MenuItem>
              <MenuItem value={30}>Spanish</MenuItem>
            </Select>
            <FormHelperText>Select your location</FormHelperText>
          </FormControl>
        </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}
          >
            Start
          </Button>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" defaultChecked/>}
            label="Show Tips" style={{display: 'flex', justifyContent: 'flex-end', margin: '-0.5rem 0 0 0'}}
          />
          {/* <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Help"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}

const verticalLine = {
  borderLeft: '2px solid #ccc',
  height: '3rem',
  position: 'relative',
  margin: '1rem 1rem 0 1rem'
}