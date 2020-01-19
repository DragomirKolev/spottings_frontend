export const actions = {
    TOGGLE_SUBMIT_SPOTTING_FORM: 'TOGGLE_SUBMIT_SPOTTING_FORM',
    SET_SPOTTINGS: 'SET_SPOTTINGS',
    ADD_SPOTTING: 'ADD_SPOTTING',
    DEL_SPOTTINGS: 'DEL_SPOTTINGS',
};

export const toggleForm = (isVisible) => ({
    type: actions.TOGGLE_SUBMIT_SPOTTING_FORM,
    submitSpottingFormVisible: isVisible
});