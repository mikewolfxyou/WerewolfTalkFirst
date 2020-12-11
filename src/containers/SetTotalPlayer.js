import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addPlayer, resetTotalPlayer} from "../actions/actions";
import '../styles/css/SetTotalPlayer.css';
import Store from '../index';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SetTotalPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: 'row',
            justify: 'center',
            alignItems: 'center',
            totalPlayer: 0
        };
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = () => {
        if (this.state.totalPlayer > 0) {
            Store.dispatch(resetTotalPlayer());
            for (let i = 1; i <= this.state.totalPlayer; i++) {
                Store.dispatch(addPlayer(i))
            }
        }
    };

    render() {
        const { alignItems, direction, justify } = this.state;
        return (
            <form onSubmit={ e => {
                e.preventDefault();
                this.handleSubmit();
            }}>
                <Grid container
                      alignItems={ alignItems }
                      direction={ direction }
                      justify={ justify }
                >
                    <Grid item xs={6} className="TotalPlayerNumberInput">
                        <TextField
                            id="totalPlayer"
                            label="玩家人数"
                            value={this.state.name}
                            onChange={this.handleChange('totalPlayer')}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={6} className="TotalPlayerNumberButton">
                        <Button type="submit" variant="raised" size="large" color="primary"
                                className={this.props.classes.button}
                        >
                            确定
                        </Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

SetTotalPlayer = connect()(SetTotalPlayer);

export default SetTotalPlayer;
