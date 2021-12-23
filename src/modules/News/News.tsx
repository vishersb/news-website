import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState } from '../../redux/rootReducer'
import {fetchPosts} from '../../redux/actions';

const News = ()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
      }, []);
    const posts = useSelector((state: RootState)=> state.posts);
    console.log(`posts`, posts)
    return(
        <h1>News</h1>
    )
};
export {News}