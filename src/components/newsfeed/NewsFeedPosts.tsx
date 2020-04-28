import React from 'react';
import { Grid, Button} from 'semantic-ui-react';
import {addPostToNewsFeed} from '../../store/newsfeed/actions';
import {Post, NewsFeedState} from '../../store/newsfeed/types';
import { RootState } from '../../store';
import {connect} from 'react-redux';
import './NewsFeedPosts.css'

export interface INewsFeedProps {
    addPostToNewsFeed: typeof addPostToNewsFeed;
    posts: Post[]
}

export interface INewsFeedState {
	count: number
}

export class NewsFeedPosts extends React.Component<INewsFeedProps, INewsFeedState> {
	constructor(props: any) {
		super(props);
		this.state = {
			count:0
		}
	}
	incrementLikes = ()=>{
		let newCount = this.state.count +1
		this.setState({
		count: newCount
		})
	}
   
    render () {
      
        return (
          <Grid className="newsFeed" stackable textAlign="center">
          {this.props.posts.map(element=>(
          
           
         <Grid.Row>
           <Grid.Column width={4 } >
             <img src={element.image} alt=""/>
             {element.user}
           </Grid.Column>

           <Grid.Column width={12} >
          <h4> {element.title}</h4>
            {element.body}
            <Button onClick={this.incrementLikes}>👍 {this.state.count}</Button>
            
           </Grid.Column>
         </Grid.Row>
           
          ))}
          </Grid>
          
        )
    }

  }
// const mapStateToProps = (state:NewsFeedState )=>{
	const mapStateToProps = (state:RootState )=>{
    return {
         posts: state.newsfeed.posts
    }
}

 export default connect (
     mapStateToProps,
     {addPostToNewsFeed}
 ) (NewsFeedPosts);