// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. a copy of current state

// and returns a new store with the updated version


function posts(state = [], action) {
  console.log("posts reducer");

  switch (action.type) {
    case 'INCREMENT_LIKES' :
      console.log("Incrementing Likes!!");
      const i = action.index;
      return [
        ...state.slice(0,i),              //before the target
        {...state[i], likes: state[i].likes + 1}, //new object
        ...state.slice(i+1)               //after the target
      ]

    default:
      console.log("--return state");
      return state;
  }

}

export default posts;
