import React from "react";
import { Grid, Button, FormControl, Select, MenuItem, InputLabel, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import NumberField from './NumberField';
import ConfirmDialog from './ConfirmDialog';

export default class InputPanel extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            hidden: false,
            formControls: {
                name: '',
                quantity:1,
                unit:'kg'
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.removeAllHandler = this.removeAllHandler.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/api/items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.formControls)
        }).then(
            () => { 
                this.props.onSubmit(this.state.formControls);
                this.setState({
                formControls: {
                    name: '',
                    quantity:'1',
                    unit:'kg'
                }
            })}
        );
    }

    changeHandler(event) {
        let updatedControls = {
            ...this.state.formControls
        };

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        updatedControls[fieldName] = fieldValue;

        this.setState({formControls: updatedControls});
    }

    removeAllHandler() {
        fetch('/api/items', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'            
            }
        }).then( () => {
            this.props.onSubmit();
        });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={1} alignItems="flex-start" justify="flex-end" direction="row">
                    <Grid item xs={12} >
                        <TextField name="name" value={this.state.formControls.name} label="Product name" fullWidth placeholder="Fill the name of product" onChange={this.changeHandler}></TextField>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth onChange={this.changeHandler}>
                            <NumberField name="quantity" value={this.state.formControls.quantity} label="Quantity"/>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                    <React.Fragment>
                        <FormControl fullWidth>
                            <InputLabel id="unit-label-id">Unit</InputLabel>
                            <Select
                            labelId="unit-label-id"
                            id="unit-input-filled"
                            value={this.state.formControls.unit}
                            name="unit"
                            onChange={this.changeHandler}
                            >
                                <MenuItem value="pieces">Pieces</MenuItem>
                                <MenuItem value="kg">Kg</MenuItem>
                            </Select>
                        </FormControl>
                        </React.Fragment>

                    </Grid>
                    <Grid item xs={6} align="left">
                        <Button type="submit" variant="contained" color="primary" fullWidth><Add /></Button>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <ConfirmDialog onSubmit={this.removeAllHandler} />
                    </Grid>
                </Grid>
            </form>
        );
    }
}