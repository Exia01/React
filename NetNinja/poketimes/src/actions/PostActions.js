/* Any post Related action goes in here */
/* We want to be able to export the action */


export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id
        /* es6 short code for id:id */
    }
}
 /* This dispatches an action, takes the type of action and the id of the post */