import React, {useReducer} from 'react'
import { Route } from 'react-router-dom'
import Search from './components/pages/search'
import ButtonNav from './components/pages/ButtonNav'
import Form from './components/pages/Form'
import Publish from './components/pages/Publish'


 const initialState = {
  posts: [],
  search: ''
 }
 const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case "SET_SEARCH": {
              return {...state, search: action.payload}
          }
            
          default: {
              return state;
          }
        }
}


const App = (porps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setPosts = (formData) => {
    dispatch({type: 'SET_POSTS', payload: formData})
  }

  const setSearch = (value) => {
    dispatch({type: 'SET_SEARCH', payload: value})
  }

  const searchedPosts = state.posts.filter((post) => {
    return post.title.toLowerCase().includes(state.search.toLowerCase()) || post.body.toLowerCase().includes(state.search.toLowerCase())
  })
 
  return (
    <div>
      <Search setSearch={setSearch} search={state.search}/>
      <ButtonNav/>
      <Route path='/add-posts' render={(props) => {
        return <Form {...props}
                      setPosts={setPosts}/>
      }}      />
      <Route path='/published' render={(props) => {
        return  <Publish {...props}
                  posts={searchedPosts}/>
      }}/>
    </div>
  )
}

export default App