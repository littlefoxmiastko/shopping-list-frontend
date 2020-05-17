import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox} from '@material-ui/core';
import { RemoveCircleOutlineSharp } from '@material-ui/icons';


export default class ResultTable extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };
    }

    fetchData(callback) {
        fetch('/api/items')
        .then(res => res.json())
        .then(result => callback(result));
    }

    componentDidMount() {
        // fetch('/api/items')
        //    .then(res => res.json())
        //    .then(result => this.setState({ items: result }));
        this.fetchData( (result) => { this.setState({items: result}); } );
    }

    remove(item) {
        fetch('/api/items/'+item.id, {
            method: 'DELETE'
        })
            .then(response => this.fetchData( (result) => { this.setState({items: result}); } ));
    }

    componentWillUpdate

    render() {
        return (
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" />
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell width={1}>
                                Quantity
                            </TableCell>
                            <TableCell padding="checkbox">
                                
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.items.map( (item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Checkbox></Checkbox>
                                </TableCell>
                                <TableCell>
                                    {item.name}
                                </TableCell>
                                <TableCell>
                                    {item.quantity} {item.unit}
                                </TableCell>
                                <TableCell>
                                    <RemoveCircleOutlineSharp onClick={()=>this.remove(item)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}