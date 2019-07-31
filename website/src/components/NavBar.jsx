import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import BuildIcon from '@material-ui/icons/Build';
import ScannerIcon from '@material-ui/icons/Scanner';
import HomeIcon from '@material-ui/icons/Home';
import VerifiedIcon from '@material-ui/icons/VerifiedUser';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { PAGES } from '../pages/Dashboard';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  function handleChangePage(page) {
    props.changePage(page)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      style={styles.wrapper}
    >
      <ListItem button onClick={() => handleChangePage("dashboard")}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" onClick={() => handleChangePage(PAGES.DASHBOARD)} />
      </ListItem>
      <div style={{ display: props.admin ? 'block' : 'block' }}>
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <VerifiedIcon />
          </ListItemIcon>
          <ListItemText primary="Administration" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} onClick={() => handleChangePage(PAGES.CUSTOMER)}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Customers" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Deposit Profiles" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Bank Users" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Bank Rule Accounts" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Roles" onClick={() => handleChangePage(PAGES.ROLEPAGE)}/>
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="System Tools" />
            </ListItem>
          </List>
        </Collapse>
      </div>
      <ListItem button onClick={() => handleChangePage(PAGES.DEPOSITS)} >
        <ListItemIcon>
          <ScannerIcon />
        </ListItemIcon>
        <ListItemText primary="Deposits" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Maintenance" />
      </ListItem>
    </List>
  );
}

const styles = {
  wrapper: {
    borderRight: '1px solid #ccc',
    height: '100%'
  },
  wrapperItem: {
    display: 'flex',
    alignItems: 'center'
  }
}