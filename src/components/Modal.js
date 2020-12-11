import React, { Component } from 'react';
import '../styles/css/Modal.css';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Modal extends Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.isModalOpen}
                    onClose={() => this.props.onCloseClick()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">{"首先发言是"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description" className="DialogContentText">
                            <span>{this.props.firstTalker}</span>号玩家!
                        </DialogContentText>
                        <DialogContentText id="alert-dialog-description" className="DialogContentText">
                            <span>{ this.props.talkOrder === 0 ? "顺序" : "逆序"}</span>发言
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.props.onCloseClick()} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Modal;
