import React from 'react';
import {Box, Typography} from '@material-ui/core/'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


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
    
      paddingLeft:'20px',
      fontWeight:'bold',
      textDecoration:'none',
      color:'#222',
      fontFamily:'Arial',
  
    },
    p:{
        color:'#111',
        textDecoration:'none',
        paddingLeft:'15px'
      },
    month:{
       color:'black',
       opacity:'0.45',
       paddingLeft:'15px'
    },
    judul:{
        fontFamily:'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
        fontWeight:'700',
        lineHeight: '24px'
    },    
    pFlex:{
      width:'300px',textAlign:'left',

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

export default function TopLeft(props) {
    const classes = useStyles();
    return(

        <Box  order={1} bgcolor="" >
            
                        
                          <Link to={props.url}>
                              <img src={props.img}></img>
                          </Link>
                        <br/>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                        <Box order={1} bgcolor="" >
                          <Link to={props.url}>
                            <Typography variant='h6' className={classes.flex1}>{props.title}</Typography>
                            </Link>
                      </Box>
                        <Box order={1} pl={2} pb={2}>
                            <p className='penjelasan'>{props.detail}</p>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <p className={classes.pFlex}><a href='' className={classes.p}>{props.name} </a> in <a href='' className={classes.p} >{props.from}</a> </p>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <div><p className={classes.pFlex}><a className={classes.month}>{props.date}</a> . <a className={classes.month}>{props.time}</a> </p></div>
                        </Box>
                    </Box>                    
            </Box>

    );
}