import axios from 'axios'

export const SHOW_USERS = 'SHOW_USERS'
export const REFRESH_USERS = 'SHOW_USERS'

export function showUsers() {
    
    return (dispatch, getState) => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                dispatch( { type: SHOW_USERS, payload: response.data } ) 
            }) 
    }
    
}

export function refreshUsers() {
    
    return (dispatch, getState) => {
        dispatch( { type: REFRESH_USERS, payload: [{
		"albumId": 1,
		"id": 1,
		"title": "accusamus beatae ad facilis cum similique qui sunt",
		"url": "http://placehold.it/600/92c952",
		"thumbnailUrl": "http://placehold.it/150/30ac17"
    }] } ) 
    }
    
}
