import { connect } from 'react-redux';
import { toggleModal } from "../actions/actions";
import Modal from '../components/Modal';

const mapStateToProps = state => {
    return {
        isModalOpen: state.isModalOpen,
        firstTalker: state.firstTalker,
        talkOrder: state.talkOrder
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCloseClick: () => {
            dispatch(toggleModal(false))
        },
    }
};

const ModalContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

export default ModalContainer;
