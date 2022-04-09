import React from 'react';

// material-ui
import { TextField, Grid } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

// ==============================|| DATETIME ||============================== //

const DateTime = () => {
    const [valueBasic, setValueBasic] = React.useState<Date | null>(new Date());

    return (
        <Grid item xs={12} lg={8}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField fullWidth {...props} helperText="" />}
                    label="Date & Time"
                    value={valueBasic}
                    onChange={(newValue: Date | null) => {
                        setValueBasic(newValue);
                    }}
                />
            </LocalizationProvider>
        </Grid>
    );
};

export default DateTime;
