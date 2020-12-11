import { connect } from 'react-redux';
import {resetSelectedPlayer, setFirstTalker, setTalkOrder, toggleModal} from "../actions/actions";
import ActionButtons from "../components/ActionButtons";

const mapStateToProps = state => {
    return {
        players: state.players
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onResetSelectedPlayerClick: () => {
            dispatch(resetSelectedPlayer());
            dispatch(setFirstTalker(0));
        },
        onSetFirstTalker: (playerId, talkOrder)  => {
            dispatch(setFirstTalker(playerId));
            dispatch(setTalkOrder(talkOrder));
            dispatch(toggleModal(Boolean(playerId) && true))
        }
    }
};

const ActionButtonsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionButtons);

export default ActionButtonsContainer;
