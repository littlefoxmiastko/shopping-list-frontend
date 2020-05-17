import React from "react";
import { Container, Paper, Box } from '@material-ui/core';
import { Dehaze } from '@material-ui/icons';
import InputPanel from './InputPanel';
import ResultTable from './ResultTable';

const items = [
    { id:1, name: "Pomidory", done:false, quantity:2, unit:'pieces' },
    { id:2, name: "Piwo", done:true, quantity:1, unit:'pieces'  },
    { id:3, name: "Woda", done:false, quantity:3, unit:'kg'  },
    { id:4, name: "taka woda w puszcze co lubie niebieska z napisami", done:false, quantity:3, unit:'kg'  },
    { id:5, name: "taka woda w puszcze co lubie niebieska z napisami", done:false, quantity:3, unit:'kg'  },
    { id:6, name: "taka woda w puszcze co lubie niebieska z napisami", done:false, quantity:3, unit:'kg'  }
   ];
 
   
export default class Main extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
      }
    
    handleClick() {
      this.setState(prev => ({hidden:!this.state.hidden}));
    }

    render() {
      return (
          <Container maxWidth="lg" p={2}>
              <Paper>
                <Box p={2} m={2}>
                  <Dehaze color="primary" onClick={() => this.handleClick()} />
                  { !this.state.hidden ? <InputPanel /> : null }
                </Box>
              </Paper>
              <Paper>
                <Box p={0} m={0}>
                  <ResultTable items={items} />          
                </Box>
              </Paper>
          </Container>
      );
    }
}