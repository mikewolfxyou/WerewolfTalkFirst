import React, { Component } from 'react';
import Player from './Player';
import Grid from '@material-ui/core/Grid'

class PlayerList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: 'row',
            justify: 'center',
            alignItems: 'center',
            totalPlayer: 0
        };
    }

    render() {
        const {alignItems, direction, justify} = this.state;
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={16}
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >
                        {
                            this.props.players.map((player, index) => (
                                <Player key={index} {...player}
                                        onClick={() => this.props.onPlayerClick(player.id)}
                                        selected={player.selected}
                                        playerId={player.id}
                                />
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default PlayerList;
