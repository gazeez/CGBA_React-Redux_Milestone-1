//Create types for the the state an action for the Redux store
export interface Post {
    id: number,
    user: string,
    title: string,
    body: string
}

//state will contain an array of posts 
export interface NewsFeedState {
    posts: Post[]
}
//action name
export const Add_Post_To_NewsFeed="Add_Post_To_NewsFeed";

//Action requirement
interface addPostToNewsFeed {
    type: typeof Add_Post_To_NewsFeed,
    payload: Post
}

//action parameter passed into the reducer
export type NewsFeedActionTypes = addPostToNewsFeed;

//We have types for the actions and state. Next we create actions