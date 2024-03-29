import React from 'react';
import {Box, Typography} from '@material-ui/core/'
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {  Search,NotificationsNone,ArrowForward} from '@material-ui/icons';

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
       color:'black',
       opacity:'0.45'
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

export default function Top(){
    const classes = useStyles();
        return(
            <div style={{ width: '100%' }}>
      <Box display="flex" p={4} bgcolor="background.paper">
            <Box pl={3} order={2} bgcolor="">
                <Box display='flex' pb={3}>
                    <Box>
                        <img src='https://cdn-images-1.medium.com/focal/100/100/45/68/1*T_wCY9dpnq1jw-AM7BzZ2w.jpeg'></img>
                    </Box>
                    <Box>
                        <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1} style={{fontSize:'16px'}}>10 Bad Habit  of Unsuccessful People</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>
                    </Box>
                </Box>


                <Box display='flex' pb={3}>
                    <Box>
                        <img src='https://cdn-images-1.medium.com/focal/100/100/66/60/1*GoxQsGM5JKMyvbwrtVxJZw.jpeg'></img>
                    </Box>
                    <Box>
                        <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1}style={{fontSize:'16px'}}>You Might Not Actually Be Struggling With Depression</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
                <Box display='flex' pb={3}>
                    <Box>
                        <img src='https://cdn-images-1.medium.com/fit/c/100/100/1*eRzBCf1kU2RjjxLE0ohCqA.jpeg'></img>
                    </Box>
                    <Box>
                        <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                            <Box order={1} bgcolor="" >
                                <a href='#'><Typography variant='h6' className={classes.flex1}style={{fontSize:'16px'}}>You Might Not Actually Be Struggling With Depression</Typography> </a>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                            </Box>
                            <Box order={1} bgcolor="" >
                                <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box  order={3} bgcolor="">
            <a href="#">
                            <img src='https://cdn-images-1.medium.com/fit/c/504/222/1*5_JyY0t-JubQJkSgCM9WpQ.jpeg' className={classes.img}></img>
                        </a><br/>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column' style={{float:'left',marginLeft:'18px'}}>      
                        <Box order={1} bgcolor="" >
                            <a href='#'><Typography variant='h6' className={classes.flex1}>Do not fall in love with a smart, introverted man</Typography> </a>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                        </Box>
                        <Box pt={10} pl={10} order={1} bgcolor="" >
                            <Box display='flex'>
                                <Box style={{paddingTop:'4px'}}><a href='' style={{textDecoration:'none',color:'#069bd6'}}>SEE ALL FEATURE </a></Box>
                                <Box style={{color:'#069bd6'}}><ArrowForward/></Box>
                            </Box>
                            
                        </Box>
                    </Box>
            </Box>
            <Box  order={1} bgcolor="" >
            
                        <a href="#">
                            <img src='https://cdn-images-1.medium.com/focal/416/151/59/53/1*gUoANPVUnpV-5hNg2HRX5Q.png'></img>
                        </a><br/>
                    <Box display="flex" bgcolor="background.paper" flexDirection='column'>      
                        <Box order={1} bgcolor="" >
                            <a href='#'><Typography variant='h6' className={classes.flex1}>A Nude 'Playboy Has Been a Mainstay in Testing Tech For Decades'</Typography> </a>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <p className={classes.pFlex}><a href='' className={classes.p}>Caroline </a> in <a href='' className={classes.p} >One Zero</a> </p>
                        </Box>
                        <Box order={1} bgcolor="" >
                            <div><p className={classes.pFlex}><a className={classes.month}>Nov 26</a> . <a className={classes.month}>6 min read</a> </p></div>
                        </Box>
                    </Box>                    
            </Box>  
                         
    </Box>
    </div>
        );


}