// increment (a like). index is saying which post
export function increment(index) {
    return {
        type: 'INCREMENT_LIKES',
        index // aka index : index
    }
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    }
}

// remove comment
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
}

// the action creators tell us what has happened with the data we need, like regular js events that get fired off.  
// e.g. x commented y on z photo. 
// but it doesn't actually update the state (which is our store in redux) -  we need reducers for that