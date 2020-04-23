import React from 'react';
import {Feed, Icon} from 'semantic-ui-react';
import {addPostToNewsFeed} from '../store/newsfeed/actions';
import {Post, NewsFeedState} from '../store/newsfeed/types';
import {connect} from 'react-redux';


export interface INewsFeedProps {
    addPostToNewsFeed: typeof addPostToNewsFeed;
    posts: Post[]
}

export class NewsFeedPosts extends React.Component<INewsFeedProps> {
    generateID=():number=>{

    let randomNumber: number=Math.floor( Math.random()*1000);
    randomNumber+=this.props.posts.length;
    return randomNumber;
    
    }

    render () {
        return (
            <Feed.Event>
            <Feed.Label image='/images/avatar/small/joe.jpg' />
            <Feed.Content>
              <Feed.Summary>
                <a>Joe Henderson</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra text>
                Ours is a life of constant reruns. We're always circling back to where
                we'd we started, then starting all over again. Even if we don't run
                extra laps that day, we surely will come back for more of the same
                another day soon.
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like' />5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content>
          </Feed.Event>
      

        )
    }

}
 const mapStateToProps = (state:NewsFeedState )=>{
     return {
         posts: state.posts
     }
 }

 export default connect (
     mapStateToProps,
     {addPostToNewsFeed}
 ) (NewsFeedPosts);