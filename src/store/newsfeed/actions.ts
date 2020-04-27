import {NewsFeedActionTypes, Add_Post_To_NewsFeed, Post} from './types';

export function addPostToNewsFeed (post: Post): NewsFeedActionTypes{
    return {
        type: Add_Post_To_NewsFeed,
        payload: post
    }
}