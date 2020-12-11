import { combineReducers } from 'redux';

import {
    ADD_PLAYER,
    TOGGLE_PLAYER,
    RESET_SELECTED_PLAYER,
    RESET_TOTAL_PLAYER,
    SET_FIRST_TALKER, TOGGLE_MODAL, SET_TALK_ORDER
} from '../actions/actions'

function players(state = [], action) {
    switch (action.type) {
        case RESET_TOTAL_PLAYER:
            return [];

        case ADD_PLAYER:
            return [
                ...state,
                {
                    id: action.playerId,
                    selected: false,
                    order: 0
                }
            ];

        case TOGGLE_PLAYER:
            return state.map((player) => {
                if (player.id === action.playerId) {
                    return Object.assign({}, player, {
                        selected: !player.selected
                    })
                }
                return player
            });

        case RESET_SELECTED_PLAYER:
            return  state.map((player) => {
                if (player.selected === true) {
                    return Object.assign({}, player, {
                        selected: false
                    })
                }
                return player
            });

        default:
            return state
    }
}

function firstTalker(state = 0, action) {

    return  (action.type === SET_FIRST_TALKER) ? action.firstTalker : state;
}

function talkOrder(state = 0, action) {
    return (action.type === SET_TALK_ORDER) ? action.talkOrder : state;
}

function isModalOpen(state = false, action) {
    return (action.type === TOGGLE_MODAL) ? action.isModalOpen : state;
}

const firstTalkerApp = combineReducers({
    players,
    firstTalker,
    talkOrder,
    isModalOpen,
});

export  default firstTalkerApp;


