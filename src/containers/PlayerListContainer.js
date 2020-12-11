import { connect } from 'react-redux';
import { togglePlayer } from "../actions/actions";
import PlayerList from '../components/PlayerList';

const mapStateToProps = state => {
    return {
        players: state.players
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlayerClick: playerId => {
            dispatch(togglePlayer(playerId))
        }
    }
};

const PlayerListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerList);

export default PlayerListContainer;
