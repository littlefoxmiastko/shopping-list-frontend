import React from "react";
import { TextField } from '@material-ui/core';

export default class NumberField extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
            label: props.label,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let reg = /^\d+$/;
        
        if (e.target.value === '' || reg.test(e.target.value)) {
            this.setState({value:e.target.value});
        }
    }

    render() {
        return (
            <TextField
                label={this.state.label} 
                value={this.state.value}
                onChange={this.handleChange}
            />
        );
    }
}