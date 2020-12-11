import React, { Component } from 'react';
import '../styles/css/ActionButtons.css'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';

class ActionButtons extends Component {
    calculateFirstTalker = () => {
        let team = [];
        let players = this.props.players;
        for (let i = 1; i <= players.length; i++) {
            if (players[i-1].selected) {
                team.push(i);
            }
        }

        if (team.length > 1) {
            let first = Math.floor((Math.random() * team.length) + 1);
            return team[first-1];
        }
        return 0;
    };

    calculateTalkOrder = () => {
        return Math.floor((Math.random()*100))%2;
    };

    renderHelper = () => {
        return (
            <div>
                <Paper className="HelpText">
                    <Typography variant="body2" gutterBottom>1. 输入玩家人数后点<span className="Blue">"确定"</span>按钮</Typography>
                    <Typography variant="body2" gutterBottom>2. 点击上警玩家头像，被选中的显示为<span className="Red">红色</span></Typography>
                    <Typography variant="body2" gutterBottom>3. 点击<span className="Blue"> "首先发言"</span>按钮</Typography>
                    <Typography variant="body2" gutterBottom>4. 如果需要改变玩家人数，重复第1步即可</Typography>
                    <Typography variant="caption" gutterBottom align="center">
                        v.0.7 Copyright©2018 Mike Zhiguo Zhang
                    </Typography>
                </Paper>
            </div>
        )
    };

    render() {
        let players = this.props.players;
        if (players.length > 0) {
            const { classes } = this.props;
            return (
                <div>
                <Grid container
                      spacing={24}
                      alignItems='center'
                      direction='row'
                      justify='center'
                >
                    <Grid item xs={6} className="ActionButtons">
                        <Button variant="raised" size="large" color="primary"
                                className={classes.button}
                                onClick={() => this.props.onSetFirstTalker(this.calculateFirstTalker(), this.calculateTalkOrder())}
                        >
                            首先发言
                        </Button>
                    </Grid>
                    <Grid item xs={6} className="ActionButtons">
                        <Button variant="raised" size="large" color="secondary"
                                className={classes.button}
                                onClick={() => this.props.onResetSelectedPlayerClick()}
                        >
                            重置
                        </Button>
                    </Grid>
                </Grid>
                { this.renderHelper() }
                </div>
            )
        }

        return (
            <div>
            { this.renderHelper() }
            </div>
        )
    }
}




export default ActionButtons;
