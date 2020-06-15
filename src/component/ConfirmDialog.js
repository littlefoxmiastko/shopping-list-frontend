import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ClearAll } from '@material-ui/icons';

export default function ConfirmDialog(props) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const removeAllHandler = () => {
        handleClose();
        props.onSubmit();
    }

    return (
        <>
          <Button variant="contained" color="secondary" onClick={handleClickOpen} fullWidth><ClearAll /></Button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to remove all items from the list ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                No
              </Button>
              <Button onClick={removeAllHandler} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          </>
      );

}