import { createSlice } from '@reduxjs/toolkit'; 

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    id:0,
    value: "Guest",
    users:[],
  },
  reducers: {
    addUser: (state,action) => {
       
      state.id=action.payload.id;
      state.value = action.payload.value;
      state.users = [...state.users, action.payload]; // Add new name to the users array
      // const { id, value } = action.payload;
      //       return {
      //           ...state,
      //           id,
      //           value,
               
      //       };
    },
   
    deleteuser:(state,action)=>{
       console.log(state.users)
      console.log(action.payload)
let userdata=action.payload.id;
     
     state.users=state.users.filter((user=>user.id!==userdata));
     
    },
    deleteall:(state)=>{
    
    state.users=[];
    
   }
  }
});

export const { addUser,deleteuser ,deleteall} = counterSlice.actions;

export default counterSlice.reducer;

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: (state,action) => {
//       console.log(action)
//       state.value += action.payload;
//     },
//     decrement: (state,action) => {
//       state.value -= action.payload;
//     },
//   }
// });

// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;

