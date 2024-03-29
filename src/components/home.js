import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Box,Tabs,Tab,Container,Typography} from '@material-ui/core/';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import {  Search,NotificationsNone,ArrowForward} from '@material-ui/icons';
import Btm from './btmPane';
import Top from './topPane'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  img:{
    width:'80%',
    heigth:'auto'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  flex1:{
    width:'300px',textAlign:'left',
    float:'right',
    paddingLeft:'20px',
    fontWeight:'bold',
    textDecoration:'none',
    color:'#222',
    fontFamily:'Arial',

  },
  p:{
      color:'#111',
      textDecoration:'none',

    },
  month:{
     color:'#555', 
  },
  judul:{
      fontFamily:'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
      fontWeight:'700',
      lineHeight: '24px'
  },    
  pFlex:{
    width:'300px',textAlign:'left',
    float:'right',
    fontSize:'13px',
    textDecoration:'none',
    color:'#222',
    fontFamily:'Arial'
  },
  brand :{
      textAlign:"left",
      fontFamily:'Times New Roman,Times, serif',
      fontSize:'29px',
      fontWeight:'800'
    },
    orange: {
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
      purple: {
        color: '#fff',
        backgroundColor: deepPurple[500],
      },    
}));

export default function Home() {
  const classes = useStyles();

  return (
<div>
<Container>
<div className={classes.root}>
      <AppBar position="static" style={{background:'#fff',color:'#000',boxShadow:'none'}}>
        <Toolbar>
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1} >
                <Box p={1} flexGrow={1} className={classes.brand}>
                Medium 
                </Box>
                <Box p={1}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <NotificationsNone/>
                    </IconButton>
                </Box>

                <Box p={1}>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                    <Search/>
                    </IconButton>
                </Box>

                <Box p={1}>
                    <label htmlFor="outlined-button-file">
                        <Button variant="outlined" component="span">
                            Upload
                        </Button>
                    </label>
                </Box>
                <Box p={1}>
                    <Avatar className={classes.purple}>OP</Avatar>
                </Box>
            </Box>
        </div>
        </Toolbar>
      </AppBar>

  <Container>
  <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
      >
    <Tab label="Home" />
    <Tab label="OneZero" />
    <Tab label="Elemenal" />
    <Tab label="Gen" />
    <Tab label="Zora" />
    <Tab label="Forga" />
    <Tab label="Human  parts" />
    <Tab label="maker" />
    <Tab label="level" />
    <Tab label="heted" />
    <Tab label="modus" />
  </Tabs>
  </Container>

</div>
</Container>

    <Top/>


<Container>
<hr/>
    <Box display='flex' pt={3}>
        <Btm/>
    </Box>
</Container>

</div>

  );
}