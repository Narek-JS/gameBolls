
const reducer = (state, action) => {
    const { type, payload } = action;
    
    switch (type) {
      case 'point': 
        return {... state, point:payload.point };
      case 'board': 
        return {...state, boardLocation:payload.location };
      default: return state;
    };
  };
  
export { reducer };
