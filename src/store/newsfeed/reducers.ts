import {NewsFeedState, Add_Post_To_NewsFeed, NewsFeedActionTypes} from './types';

const initialState: NewsFeedState = {
    posts: [
        {   image: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
            id:1,
            user: 'James Brown',
            title: 'sunt aut facere repellat provident',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla.  '
            
        
        }, 
        
        {
            image: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
            id:2,
            user: 'Jerry Godbout',
            title:'est rerum tempore vitae\nsequi sint nihil',
            body:'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta  '
            
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/small/helen.jpg',
            id:3,
            user: 'Kelly Petter',
            title:'ea molestias quasi exercitationem repella',
            body:'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta  '
            
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
            id:4,
            user:'Garry Loard',
            title:'repudiandae veniam quaerat sunt sed\nalias',
            body:'suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta  '
        },
        {
            image: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
            id:5,
            user:'Random User',
            title:'eum et est occaecati',
            body:'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta  '
            
        }
        
    ]
}

export function newsFeedReducer (state=initialState, action: NewsFeedActionTypes){
    switch (action.type) {
        case Add_Post_To_NewsFeed:
          	return {
				...state,
				posts: [...state.posts, action.payload]
   		 	}
    	default: 
        	return state;    
    }
}