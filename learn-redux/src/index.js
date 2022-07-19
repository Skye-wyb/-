const redux = require('redux')

const initialState = {
  counter: 0
}

const reducer = ((state = initialState), action)=>{
    return state
}

const store = redux.createStore(reducer)

