import React from 'react';
import { Grid, Icon, Feed, Button} from 'semantic-ui-react';
import {addPostToNewsFeed} from '../store/newsfeed/actions';
import {Post, NewsFeedState} from '../store/newsfeed/types';
import {connect} from 'react-redux';




export interface INewsFeedProps {
    addPostToNewsFeed: typeof addPostToNewsFeed;
    posts: Post[]
  
}

export class NewsFeedPosts extends React.Component<INewsFeedProps> {
   state={
     count:0
   }
   incrementMe = ()=>{
     let newCount = this.state.count +1
     this.setState({
       count: newCount
     })
   }
   
    render () {
      
        return (
          <Grid className="newsFeed">
          {this.props.posts.map(element=>(
          
           
         <Grid.Row>
           <Grid.Column width={4 } >
             <img src={element.image} alt=""/>
             {element.user}
           </Grid.Column>

           <Grid.Column width={12} >
          <h4> {element.title}</h4>
            {element.body}
            <Button onClick={this.incrementMe}>👍 {this.state.count}</Button>
            
           </Grid.Column>
         </Grid.Row>
           
          ))}
          </Grid>
          
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