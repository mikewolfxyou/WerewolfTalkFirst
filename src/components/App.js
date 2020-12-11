import React, { Component } from 'react';
import ActionButtonsContainer from '../containers/ActionButtonsContainer';
import SetTotalPlayer from '../containers/SetTotalPlayer';
import PlayerListContainer from '../containers/PlayerListContainer';
import '../styles/css/App.css';
import ModalContainer from "../containers/ModallContainer";
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});

class App extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="AppContainer" style={{}}>
                <ModalContainer/>
                <Grid container>
                    <Grid item xs={12}>
                        <SetTotalPlayer classes={classes}/>
                    </Grid>
                    <div className="AppPlayerListContainer">
                        <Grid item xs={12}>
                            <PlayerListContainer classes={classes}/>
                        </Grid>
                    </div>
                    <Grid item xs={12}>
                        <ActionButtonsContainer classes={ classes }/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(App);
