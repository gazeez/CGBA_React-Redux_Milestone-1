import React from 'react';
import {Feed, Icon,} from 'semantic-ui-react';
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
              {this.props.posts.map(element=>(
                <li>
            <Feed.Label image='/images/kristy.png' />
            <Feed.Content>
              <Feed.Summary>
                <a>{element.user}</a> posted on his page
                <Feed.Date>3 days ago</Feed.Date>
              </Feed.Summary>
              <h3>{element.title}</h3>
              <Feed.Extra text>
                {element.body}
              </Feed.Extra>
              <Feed.Meta>
                <Feed.Like>
                  <Icon name='like'/>5 Likes
                </Feed.Like>
              </Feed.Meta>
            </Feed.Content> </li>))}
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