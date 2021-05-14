import { AppBar, Button, Container, Icon, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { makeStyles} from '@material-ui/core/styles'
import {React,useState} from 'react'
import {Link} from 'react-router-dom'
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles=makeStyles(theme=>({
    sectionDesktop:{
        display:'none',
        [theme.breakpoints.up('sm')]:{
            display:'flex',
        },
    },
    sectionMobile:{
        display:'none',
        [theme.breakpoints.down('xs')]:{
            display:'flex',
        },
    },
    navbarstyle:{
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
    
    
}))

const Navbar=()=>{
    const classes=useStyles()

    const [mobileMenuAnchorEl,setMobileMenuAnchorEl]=useState(null)
    const isMobileMenuOpen=Boolean(mobileMenuAnchorEl)

    const mobileOpenMenu=(event)=>{
        setMobileMenuAnchorEl(event.currentTarget)

    }

    const mobileCloseMenu=()=>{
        setMobileMenuAnchorEl(null)
    }

    const mobileMenu=(
        
        <Menu anchorEl={mobileMenuAnchorEl} id='mobile-menu' keepMounted open={isMobileMenuOpen}>
            <MenuItem component={Link} onClick={mobileCloseMenu} to='/'>Home</MenuItem>
            <MenuItem component={Link} onClick={mobileCloseMenu} to='/about'>About</MenuItem>
            <MenuItem component={Link} onClick={mobileCloseMenu} to='/contact'>Contact</MenuItem>
        </Menu>
    )


    return (
        <Container disableGutters>
            <AppBar position='fixed'>
                <Toolbar className={classes.navbarstyle}>
                    <Typography color='inherit' component={Link} to='/' variant='h5' style={{flexGrow:1}} >
                        Tag-it
                    </Typography >
                    <div className={classes.sectionDesktop}>
                        <Button color='inherit' component={Link} to='/'>Home</Button>
                        <Button color='inherit' component={Link} to='/about'>About</Button>
                        <Button color='inherit' component={Link} to='/contact'>Contact</Button>
                    </div>
                    <IconButton className={classes.sectionMobile} color='inherit' onClick={mobileOpenMenu}>
                        <MoreIcon></MoreIcon>
                    </IconButton>
                   
                </Toolbar>
                
            </AppBar>
            {mobileMenu}
        </Container>
    )
        
    
}

export default Navbar