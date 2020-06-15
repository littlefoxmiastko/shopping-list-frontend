import React, { useState, useEffect }  from "react";
import { Container, Paper, Box } from '@material-ui/core';
import { Dehaze } from '@material-ui/icons';
import InputPanel from './InputPanel';
import ResultTable from './ResultTable';

 
   
export default function Main(props) {
    const [items, setItems] = useState([]);
    const [hidden, setHidden] = useState(false);

    const fetchData = (callback) => {
        fetch('/api/items')
        .then(res => res.json())
        .then(result => { callback(result); });
    }

    const removeHandler = (item) => {
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

    const addHandler = () => {
      fetchData(setItems);
    }

    const hiddenHandler = () => {
      setHidden(!hidden);
    }

    useEffect(() => {
        fetchData(setItems);
      }, []);

    return (
        <Container maxWidth="lg" p={2}>
            <Paper>
              <Box p={2} m={2}>
                <Dehaze color="primary" onClick={() => hiddenHandler()} />
                { !hidden ? <InputPanel onSubmit={addHandler} /> : null }
              </Box>
            </Paper>
            <Paper>
              <Box p={0} m={0}>
                <ResultTable items={items} onDone={doneHandler} onRemoved={removeHandler} />          
              </Box>
            </Paper>
        </Container>
    );
}