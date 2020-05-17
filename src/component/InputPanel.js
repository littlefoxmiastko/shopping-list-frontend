import React from "react";
import { Grid, Button, FormControl, Select, MenuItem, InputLabel, TextField, Form } from '@material-ui/core';
import { Add, ClearAll } from '@material-ui/icons';
import NumberField from './NumberField';

export default class InputPanel extends React.Component{

    constructor(props) {
        super(props);

        this.state = {hidden: false};
    }

    render() {
        return(
                <Grid container spacing={1} alignItems="flex-start" justify="flex-end" direction="row">
                    <Grid item xs={12} >
                        <TextField label="Product name" fullWidth placeholder="Fill the name of product"></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth>
                            <NumberField value="1" label="Quantity"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl fullWidth>
                            <InputLabel id="unit-select-input-label">Unit</InputLabel>
                            <Select
                            labelId="unit-select-label"
                            id="unit-select"
                            value="pieces"
                            >
                                <MenuItem value="pieces">Pieces</MenuItem>
                                <MenuItem value="kg">Kg</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} align="left">
                        <Button variant="contained" color="primary" fullWidth><Add /></Button>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Button variant="contained" color="secondary" fullWidth><ClearAll /></Button>
                    </Grid>
                    
                </Grid>
        );
    }
}