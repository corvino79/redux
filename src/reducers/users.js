import { SHOW_USERS, REFRESH_USERS } from '../actions'

const initialState = {
    list: []
}

export function Users(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_USERS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
    
}