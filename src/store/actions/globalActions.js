import { GlobalActions } from "../globalReducer";

export const setTitleActionCreator = (newTitle) => ({
    type: GlobalActions.setTitle,
    payload: newTitle
});

export const setUserNameActionCreator = (newUserName) => ({
    type: GlobalActions.setUserName,
    payload: newUserName
});