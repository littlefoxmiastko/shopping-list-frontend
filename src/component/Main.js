import React from "react";
import { Container, Paper, Box } from '@material-ui/core';
import { Dehaze } from '@material-ui/icons';
import InputPanel from './InputPanel';
import ResultTable from './ResultTable';

 
   
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
                  <ResultTable />          
                </Box>
              </Paper>
          </Container>
      );
    }
}