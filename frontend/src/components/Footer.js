import {makeStyles, Paper,Grid,Typography,Link } from '@material-ui/core'
import React from 'react'
import Icon from '@material-ui/core/Icon'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles=makeStyles((theme)=>({
    paper:{
        margin:'80px auto',
        padding:'20px',
        width:'100%',
        height:'200px',
        background:'#064063'
    },
    footer:{
        color:'white',
        textAlign: 'center',
        flexDirection:'column'
    
    },
    socialicons:{
        display:'flex',
        justifyContent:'center'

    }

}))


function Footer() {
    const classes=useStyles()
    return (
        <Paper className={classes.paper} elevation={20}>
            <Grid noWrap container spacing={2} className={classes.footer} >
                <Grid item >
                    <Typography  variant='h5' >
                        <Link href="#" underline='none' color="inherit">Tag-it</Link>
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
                <Grid container item className={classes.socialicons}>
                    <Grid>
                        <FacebookIcon></FacebookIcon>
                    </Grid>
                    <Grid>
                        <TwitterIcon></TwitterIcon>
                    </Grid>
                    <Grid>
                        <LinkedInIcon></LinkedInIcon>
                    </Grid>

                </Grid>
            </Grid>
            
        </Paper>
        
    )
}

export default Footer
