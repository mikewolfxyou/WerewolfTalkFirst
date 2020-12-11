export const RESET_TOTAL_PLAYER = 'RESET_TOTAL_PLAYER';
export const ADD_PLAYER = 'ADD_PLAYER';
export const TOGGLE_PLAYER = 'TOGGLE_PLAYER';
export const RESET_SELECTED_PLAYER = 'RESET_SELECTED_PLAYER';
export const SET_FIRST_TALKER = 'SET_FIRST_TALKER';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const SET_TALK_ORDER = 'SET_TALK_ORDER';

export function resetTotalPlayer() {
  return {
    type: RESET_TOTAL_PLAYER
  }
}

export function addPlayer(playerId) {
    return {
        type: ADD_PLAYER,
        playerId
    }
}

export function togglePlayer(playerId) {
    return {
        type: TOGGLE_PLAYER,
        playerId
    }
}

export function resetSelectedPlayer() {
    return {
        type: RESET_SELECTED_PLAYER
    }
}

export function setFirstTalker(firstTalker) {
    return {
        type: SET_FIRST_TALKER,
        firstTalker
    }
}

export function setTalkOrder(talkOrder) {
    return {
        type: SET_TALK_ORDER,
        talkOrder
    }
}

export function toggleModal(isModalOpen) {
    return {
        type: TOGGLE_MODAL,
        isModalOpen
    }
}
