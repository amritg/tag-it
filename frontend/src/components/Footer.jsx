import {makeStyles, Paper,Grid,Typography} from '@material-ui/core'
import React from 'react'
import Icon from '@material-ui/core/Icon'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Link} from 'react-router-dom'


const useStyles=makeStyles((theme)=>({
    paper:{
        margin:'0px',
        width:'100%',
        height:'auto',
        background:'#064063'
    },
    footer:{
        color:'white',
        textAlign: 'center',
        flexDirection:'column'
    
    },
    socialicons:{
       
        display:'flex',
        justifyContent:'center',
        

    }

}))




function Footer() {
    const classes=useStyles()
    const socialicon={padding:'12px',color:'pink'}
    return (
        <Paper className={classes.paper} elevation={20}>
            <Grid noWrap container spacing={2} className={classes.footer} >
                <Grid item >
                    <Typography  variant='h5' >
                        Tag-it
                    </Typography >
                </Grid>
                <Grid item  >
                    <Typography  variant='h5' >
                            Home
                    </Typography >
                </Grid>
                <Grid item   >
                    <Typography  variant='h5' >
                            About Us
                    </Typography >
                </Grid>
                <Grid item   >
                    <Typography  variant='h5' >
                            Contact Us
                    </Typography >
                </Grid>
                <Grid item   >
                    <Typography color='inherit' component={Link} to='/Signup'  variant='h5'>
                            Sign Up
                    </Typography >
                </Grid>
                <Grid container item className={classes.socialicons}>
                    <Grid item style={socialicon}>
                        <FacebookIcon></FacebookIcon>
                    </Grid>
                    <Grid item style={socialicon}>
                        <TwitterIcon ></TwitterIcon>
                    </Grid>
                    <Grid item style={socialicon}>
                        <LinkedInIcon></LinkedInIcon>
                    </Grid>

                </Grid>
            </Grid>
            
        </Paper>
        
    )
}

export default Footer
