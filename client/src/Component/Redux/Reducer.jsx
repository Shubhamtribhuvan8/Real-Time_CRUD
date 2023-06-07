// const initialState = {
//   AllDetails: [],
//   PutData: [],
//   PatchData: [],
// };

// const Reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_ALL_DETAILS":
//       return { ...state, AllDetails: action.payload };

//     case "PUT_CART":
//       return { ...state, PutData: [...state.PutData, action.payload] };

//     case "PATCH_ORDER":
//       return { ...state, PATCH_ORDER: [...state.PatchData, action.payload] };

//     case "DELETE":
//       let delete1 = state.AllDetails.filter((e) => e._id !== action.payload);
//       return { ...state, AllDetails: delete1 };

//     default:
//       return state;
//   }
// };

// export default Reducer;
// Redux/Reducer.js
const initialState = {
  AllDetails: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALL_DETAILS":
      return { ...state, AllDetails: action.payload };

    case "DELETE":
      let delete1 = state.AllDetails.filter((e) => e._id !== action.payload);
      return { ...state, AllDetails: delete1 };

    default:
      return state;
  }
};

export default Reducer;
