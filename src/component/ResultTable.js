import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox} from '@material-ui/core';
import { RemoveCircleOutlineSharp } from '@material-ui/icons';


export default function ResultTable(props) {

    const remove = (item) => {
        props.onRemoved(item);
    }

    const doneHandler = (item) => {
        props.onDone(item);
    }

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
                    {props.items?props.items.map( (item) => (
                        <TableRow key={item.id}>
                            <TableCell>
                                <Checkbox onClick={() => doneHandler(item)} checked={item.done}></Checkbox>
                            </TableCell>
                            <TableCell>
                                {item.name}
                            </TableCell>
                            <TableCell>
                                {item.quantity} {item.unit}
                            </TableCell>
                            <TableCell>
                                <RemoveCircleOutlineSharp onClick={()=>remove(item)} />
                            </TableCell>
                        </TableRow>
                    )):''}
                </TableBody>
            </Table>
        </TableContainer>
    );
    
}