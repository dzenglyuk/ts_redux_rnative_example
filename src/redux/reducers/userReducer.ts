import { UserModel, UserAction } from "../actions/userActions";

type UserState = {
    user: UserModel;
    error: string | undefined;
};

const initialState = {
    user: {} as UserModel,
    error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case "ON_LOGIN":
            return {
                ...state,
                user: action.payload,
            };
        case "ON_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export { userReducer };
