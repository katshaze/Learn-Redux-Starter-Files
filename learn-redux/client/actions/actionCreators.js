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