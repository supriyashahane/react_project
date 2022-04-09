import React from 'react';
import { useDispatch } from 'react-redux';
// material-ui
import { FormControlLabel, Checkbox, Button, FormHelperText, Grid, InputAdornment, InputLabel, TextField } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import LockTwoToneIcon from '@mui/icons-material/LockTwoTone';
import LinkTwoToneIcon from '@mui/icons-material/LinkTwoTone';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DatePicker';
import { SNACKBAR_OPEN } from 'store/actions';
import axios from 'axios';
// ==============================|| PROFILE 3 - PROFILE ||============================== //

const Profile = () => {
    const validationSchema = yup.object({
        emailInstant: yup.string().email('Enter a valid email').required('Email is required'),
        NameInstant: yup.string().min(3, 'Name should be of minimum 3 characters length').required('Name is required'),
        ServerInstant: yup.string().min(3, 'Server name should be of minimum 3 characters length').required('Server name is required'),
        UsernameInstant: yup.string().min(3, 'Username should be of minimum 3 characters length').required('Username is required'),
        PasswordInstant: yup.string().min(3, 'Password should be of minimum 3 characters length').required('Password is required'),
        ProfileInstant: yup.string().min(3, 'Profile URL should be of minimum 3 characters length').required('Profile URL is required'),
        Dateinstant: yup.string().min(3, 'Date URL should be of minimum 3 characters length').required('Date is required')
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [valueBasic, setValueBasic] = React.useState<Date | null>(new Date());
    const location = useLocation();
    const params = JSON.stringify(location.state);
    const obj = JSON.parse(params);
    console.log(obj.id);
    const formik = useFormik({
        initialValues: {
            emailInstant: obj.emailInstant,
            NameInstant: obj.NameInstant,
            ServerInstant: obj.ServerInstant,
            UsernameInstant: obj.UsernameInstant,
            PasswordInstant: obj.PasswordInstant,
            ProfileInstant: obj.ProfileInstant,
            Dateinstant: obj.Dateinstant,
            id: obj.id
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(typeof values);
            await axios({
                method: 'PUT',
                url: 'https://visionarybizz.com/testbackend1/user.php',
                proxy: {
                    protocol: 'http',
                    host: 'http://localhost:3000',
                    port: 80,
                    auth: {
                        username: 'root',
                        password: 'Sup@123'
                    }
                },
                data: JSON.stringify(values)
            }).then((response) => {
                // Do something with the response
                console.log(values);
            });
            dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Record Updated',
                variant: 'alert',
                alertSeverity: 'success'
            });
            formik.resetForm();
            formik.setFieldValue('NameInstant', '');
            navigate('/sample-page');
        }
    });
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item sm={12} md={12}>
                <SubCard title="Edit Account Details">
                    <form onReset={formik.handleReset} onSubmit={formik.handleSubmit}>
                        <Grid container alignItems="center" justifyContent="center" spacing={1}>
                            <Grid item xs={12} lg={6}>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Name</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            fullWidth
                                            id="NameInstant"
                                            name="NameInstant"
                                            label="Name"
                                            defaultValue={formik.values.NameInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.NameInstant && Boolean(formik.errors.NameInstant)}
                                            helperText={formik.touched.NameInstant && formik.errors.NameInstant}
                                        />
                                        <FormHelperText>Please enter project name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Server</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            fullWidth
                                            id="ServerInstant"
                                            name="ServerInstant"
                                            label="Server Name"
                                            defaultValue={formik.values.ServerInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.ServerInstant && Boolean(formik.errors.ServerInstant)}
                                            helperText={formik.touched.ServerInstant && formik.errors.ServerInstant}
                                        />
                                        <FormHelperText>Please enter Server Name</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Username</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            fullWidth
                                            id="UsernameInstant"
                                            name="UsernameInstant"
                                            label="Username Name"
                                            defaultValue={formik.values.UsernameInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.UsernameInstant && Boolean(formik.errors.UsernameInstant)}
                                            helperText={formik.touched.UsernameInstant && formik.errors.UsernameInstant}
                                        />
                                        <FormHelperText>Please enter Username</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Password</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            type="text"
                                            fullWidth
                                            id="PasswordInstant"
                                            name="PasswordInstant"
                                            defaultValue={formik.values.PasswordInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.PasswordInstant && Boolean(formik.errors.PasswordInstant)}
                                            helperText={formik.touched.PasswordInstant && formik.errors.PasswordInstant}
                                            label="Enter Password"
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LockTwoToneIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <FormHelperText>Please enter Password</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Status</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            fullWidth
                                            id="ProfileInstant"
                                            name="ProfileInstant"
                                            label="Status"
                                            defaultValue={formik.values.ProfileInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.ProfileInstant && Boolean(formik.errors.ProfileInstant)}
                                            helperText={formik.touched.ProfileInstant && formik.errors.ProfileInstant}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <LinkTwoToneIcon />
                                                    </InputAdornment>
                                                )
                                            }}
                                        />
                                        <FormHelperText>Please enter your Profile URL</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Server Type</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Domain" />
                                        <FormControlLabel control={<Checkbox />} label="Hosting" />
                                        <FormControlLabel control={<Checkbox />} label="SSL" />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Expiry Date</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                label="Date & Time"
                                                value={formik.values.Dateinstant}
                                                onChange={(newValue: Date | null) => {
                                                    setValueBasic(newValue);
                                                    formik.values.Dateinstant = newValue;
                                                }}
                                                renderInput={(props) => (
                                                    <TextField
                                                        fullWidth
                                                        {...props}
                                                        id="Dateinstant"
                                                        name="Dateinstant"
                                                        label="Date"
                                                        defaultValue={formik.values.Dateinstant}
                                                        value={valueBasic}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.Dateinstant && Boolean(formik.errors.Dateinstant)}
                                                        helperText={formik.touched.Dateinstant && formik.errors.Dateinstant}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs={12} lg={4}>
                                        <InputLabel>Email</InputLabel>
                                    </Grid>
                                    <Grid item xs={12} lg={8}>
                                        <TextField
                                            fullWidth
                                            id="emailInstant"
                                            name="emailInstant"
                                            label="Email"
                                            defaultValue={formik.values.emailInstant}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.emailInstant && Boolean(formik.errors.emailInstant)}
                                            helperText={formik.touched.emailInstant && formik.errors.emailInstant}
                                        />
                                        <FormHelperText>Please enter Username</FormHelperText>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} lg={12}>
                                <Button variant="contained" type="submit">
                                    Verify & Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default Profile;
