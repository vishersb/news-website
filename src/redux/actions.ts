import { CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types";

interface Dispatch {
    (action: object): void;
  }

export function createPost(post:object){
    return{
        type: CREATE_POST,
        payload: post,
    }
}
export function showLoader() {
    return {
        type: SHOW_LOADER,        
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,        
    }
}

export function fetchPosts(){
    return async (dispatch: Dispatch) => {
        dispatch(showLoader())
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        dispatch(hideLoader())
        const json = await response.json();
        dispatch({type: FETCH_POSTS, payload: json})
    }
}