// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. copy of current state

// the reducer has a look, does some stuff, and returns a new updated store

// first time this runs, there won't be any state, so need to start the state as an empty array
function posts(state=[], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('incrementing likes!');
            const i = action.index;
            return [
                ...state.slice(0,i), // before the one we are updating
                {...state[i], likes: state[i].likes + 1}, // update the one post we're actually interested in
                ...state.slice(i + 1), // after the one we are updating
            ]
        default: 
            return state;
    }
    return state;    
}

export default posts;
