import { Avatar, Button, Checkbox, Grid, Link, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormControlLabel from '@material-ui/core/FormControlLabel';

const userSchema=yup.object().shape({
    email:yup.string().email('*Invalid Email').required('*Email is required'),
    password:yup.string().matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ).required('*password is required')
})

const useStyles=makeStyles((theme)=>({
    paper:{
        margin:'80px auto',
        padding:'20px',
        width:400,
    },

    signupbuttons: {
        display:'flex',
        justifyContent:'space-around',
    },

}))

const Signin=()=>{
    const classes=useStyles()
    const {register,handleSubmit,formState: { errors }}=useForm({resolver: yupResolver(userSchema)})
    const onSubmit = (data) => {console.log(data)};

    const headerStyle={margin:'2px',color:'blue'}
    const typographyStyle={padding:'12px'}
    const errorStyle={color:'red'}
    const avatarStyle={background:'blue'}

    return (
        
        <Paper className={classes.paper} elevation={20}>
            <Grid container direction="column" alignItems="center">
                <Avatar style={avatarStyle}> <AddCircleIcon/></Avatar>
                <h2 style={headerStyle} >Sign In</h2>

            </Grid>
            
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container spacing={2} >
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Email*" variant="outlined" fullWidth {...register('email')}/>
                        <p style={errorStyle}>{errors.email?.message}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Password*" variant="outlined" fullWidth {...register('password')}/>
                        <p style={errorStyle}>{errors.password?.message}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color={'primary'} />} label="Remember me"/>
                    </Grid>
                    <Grid item xs={12} align={'center'}>
                        <Button variant="contained" color="primary" type='submit' >Sign In</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>
                            <Link href='#'> Forgot password ?</Link>
                        </Typography>
                        <Typography> Don't have an account ? 
                            <Link href='#'> Sign Up </Link>
                        </Typography>
                
                    </Grid>
    
                </Grid>
            
            </form>
        </Paper>
        
    )
}

export default Signin