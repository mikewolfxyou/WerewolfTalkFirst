import React, { Component } from 'react';
import '../styles/css/Player.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

class Player extends Component {
    render() {
        if (this.props.playerId > 0) {
            return (
                <Grid key={this.props.playerId} item onClick={this.props.onClick }>
                    <Paper className="PaperPlayer">
                        <div className="PaperPlayerContainer" style={{}}>
                            <img src={
                                require('../img/' + (this.props.selected ? 'selected' : 'unselected') + '.png')
                            }
                                 alt="player"
                            />
                            <div className="PlayerId">
                                { this.props.playerId }
                            </div>
                        </div>
                    </Paper>
                </Grid>
            )
        } else {
            return (<div/>);
        }
    }
}

export default Player;
