import React, {useState} from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import s from './Login.module.css';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import {Redirect} from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import {IconButton} from "@mui/material";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {userLoginAC, userLoginTC} from "../../redux/loginReducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}


export const LoginPage = () => {

    const logged = useSelector<rootReducerType, boolean>(state => state.authorization.isAuth)
    const dispatch = useDispatch()

    const [eye, setEye] = useState(true)
    const eyeHandleClick = () => {
        if (eye) {
            setEye(false)
        } else {
            setEye(true)
        }
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            //alert(JSON.stringify(values));
            dispatch(userLoginTC(values))
        },
    })

    if (logged) {
        return <Redirect to={'/profile'}/>
    }

    return <div style={{position: 'absolute', marginLeft: '400px'}}>
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <div className={s.box}>
                            <FormLabel>
                                <p>To log in get registered
                                    <a href={'https://social-network.samuraijs.com/'}
                                       target={'_blank'}> here
                                    </a>
                                </p>
                                <p>or use common test account credentials:</p>
                                <p>Email: free@samuraijs.com</p>
                                <p>Password: free</p>
                            </FormLabel>
                            <FormGroup>
                                <TextField label="Email"
                                           margin="normal"
                                           name="email"
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.email}/>

                                {formik.touched.email &&
                                formik.errors.email ?
                                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null
                                }
                                <TextField type={eye ? `password` : 'text'}
                                           label="Password"
                                           margin="normal"
                                           name="password"
                                           onChange={formik.handleChange}
                                           onBlur={formik.handleBlur}
                                           value={formik.values.password}
                                           InputProps={{
                                               endAdornment: (
                                                   <InputAdornment position="end">
                                                       <IconButton aria-label="toggle password visibility"
                                                                   onClick={eyeHandleClick}
                                                       >
                                                           {eye ? <VisibilityOff/> : <Visibility/>}
                                                       </IconButton>
                                                   </InputAdornment>
                                               )
                                           }}
                                />
                                {formik.touched.password &&
                                formik.errors.password ?
                                    <div
                                        style={{color: 'red'}}>{formik.errors.password}</div> : null
                                }
                                <FormControlLabel label={'Remember me'}
                                                  control={
                                                      <Checkbox
                                                          onChange={formik.handleChange}
                                                          checked={formik.values.rememberMe}
                                                          name="rememberMe"
                                                      />}/>
                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Login
                                </Button>
                            </FormGroup>
                        </div>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    </div>
}
