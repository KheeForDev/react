import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Note(props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleOpenDialog}>delete</button>

            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Delete Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this note?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default Note;
