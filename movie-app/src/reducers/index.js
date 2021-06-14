
import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/index';
const initialState = {
    list:[],
    favourites:[]
}

export default function movies(state=initialState, action){

    if(action.type ===ADD_MOVIES)
    {
        return {
            ...state,
            list: action.movies
        }
    }
    else if( action.type === ADD_FAVOURITE){

        return {
            ...state,
            favourites: [action.movie, ...state.favourites]
        }
    }
    else if(action.type===REMOVE_FAVOURITE){
        return {
            ...state,
            favorite: state.favourites.splice(action.movie,1)
        }
    }
    return state;

}