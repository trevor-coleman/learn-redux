function postComments( state = [], action ) {
  console.log("--postComments Reducer")
  switch ( action.type ) {
    case 'ADD_COMMENT':
      console.log("----ADD_COMMENT");
      return [
        ...state, {
          user: action.author,
          text: action.comment
        }
      ]
      break;
    case 'REMOVE_COMMENT':
      console.log("----REMOVE_COMMENT")
      const i = action.i
      return [
        ...state.slice(0,i),
        ...state.slice(i+1)
      ]
      break;
    default:
      return state;
  }

}

function comments( state = [], action ) {
  console.log( "comments reducer" );

  if ( typeof action.postId !== 'undefined' ) {
    return {
      ...state,
      [ action.postId ]: postComments( state[action.postId], action )
    }
  }
  console.log("--return state");
  return state;
}

export default comments;
