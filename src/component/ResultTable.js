import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox} from '@material-ui/core';
import { RemoveCircleOutlineSharp } from '@material-ui/icons';


export default function ResultTable(props) {

    const [items, setItems] = useState([]);

    const fetchData = (callback) => {
        fetch('/api/items')
        .then(res => res.json())
        .then(result => { callback(result); });
    }

    const remove = (item) => {
        fetch('/api/items/'+item.id, {
            method: 'DELETE'
        }).then(() => {
            setItems(items.filter( (element) => element.id!==item.id));
        });
    }

    const doneHandler = (item) => {
        fetch('/api/items/'+item.id+'/done', {
            method: 'PATCH'
        }).then( () => { 
                item.done=!item.done;
                setItems(items.map( (element) => element.id===item.id ? item : element));
        });
    }

    useEffect(() => {
        fetchData(setItems);
      }, []);

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
                    {items?items.map( (item) => (
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