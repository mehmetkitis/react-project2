export const GlobalActions = {
    setTitle: "SET_TITLE",
    setUserName: "SET_USER_NAME",
}

export const globalInitial = {
    title: "Merhaba redux",
    userName: "",
}

export const globalReducer = (state = globalInitial, action) => {
    switch (action.type) {
        case GlobalActions.setTitle:
            return { ...state, title: action.payload };
        case GlobalActions.setUserName:
            return { ...state, userName: action.payload };
        default:
            return state;
    }
}