// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// the reducer has a look, does some stuff, and returns a new updated store

// first time this runs, there won't be any state, so need to start the state as an empty array
function comments(state=[], action) {
    console.log(state, action);
    return state;    
}

export default comments;