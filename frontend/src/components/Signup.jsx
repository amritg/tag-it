import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {React,useState} from 'react'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {Link} from 'react-router-dom'
import addusersapi from '../apis/addusersapi'


const userSchema=yup.object().shape({
    firstname:yup.string().required('*First Name is required'),
    lastname:yup.string().required('*Last Name is required'),
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

const Signup=()=>{
    const [firstname, setFirstname]=useState('')
    const [lastname, setLastname]=useState('')
    const [email, setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleSubmitform = async (e) => {
        e.preventDefault();
        console.log(e.target.value);
        try {
            const response= await addusersapi.post('/',{
                firstname,
                lastname,
                email,
                password
                
            })
            console.log('test')

        } catch (error) {}
    
      };


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
                <h2 style={headerStyle} >Sign Up</h2>
                <Typography variant='caption' style={typographyStyle}><b>Please fill the form below!</b></Typography>
            </Grid>
            
            <form onSubmit={handleSubmit(onSubmit)} >
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={6}>
                        <TextField id="outlined-basic" label="First Name*" variant="outlined" fullWidth {...register('firstname')} value={firstname} onChange={e=>setFirstname(e.target.value)} />
                        <p style={errorStyle}>{errors.firstname?.message}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="outlined-basic" label="Last Name*" variant="outlined" fullWidth {...register('lastname')} value={lastname} onChange={e=>setLastname(e.target.value)}/>
                        <p style={errorStyle}>{errors.lastname?.message}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Email*" variant="outlined" fullWidth {...register('email')} value={email} onChange={e=>setEmail(e.target.value)}/>
                        <p style={errorStyle}>{errors.email?.message}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="outlined-basic" label="Password*" variant="outlined" fullWidth {...register('password')} value={password} onChange={e=>setPassword(e.target.value)}/>
                        <p style={errorStyle}>{errors.password?.message}</p>
                    </Grid>
                    <Grid container className={classes.signupbuttons}>
                        <Grid item >
                            <Button variant="contained" color="primary" component={Link} to='/'>Cancel</Button>
                        </Grid>
                        <Grid item >
                            <Button variant="contained" color="primary" type='submit' onClick={handleSubmitform} component={Link} to='/'>Sign Up</Button>
                        </Grid>
                    </Grid>
    
                </Grid>
            
            </form>
        </Paper>
        
    )
}

export default Signup