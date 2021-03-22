import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function EducationForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Educational Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        id="university"
                        name="university"
                        label="University"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="degree"
                        name="degree"
                        label="Degree"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="startDate"
                        name="startDate"
                        label="Start Date"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="endDate"
                        name="endDate"
                        label="End Date"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="gpa"
                        name="gpa"
                        label="GPA"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}