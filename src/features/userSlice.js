//Day-2 of build (Authentication and plans profile screen)
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user', //modified
  initialState: {
    user: null,   //modified
  },
  reducers: {           //modified
    //these are called actions login and loggedout//basically we dispatch an action and then it will do the appropriate behaviour
    //so the way we interact with the global store is we have to dispatch actions into it
    //so we have created a login and logout and they both have a way of affecting the user section of the store so thats why they are inside the user reducer or the user slice
    login : (state, action) => {      //login takes the state and action 
      state.user = action.payload   //now it takes the state and modifies the user and set the user to wherever we pass as a payload
    },
    logout : (state) => {
      state.user = null;
    }
  
  
  
    //previous code
  //   increment: state => {
  //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
  //     // doesn't actually mutate the state because it uses the Immer library,
  //     // which detects changes to a "draft state" and produces a brand new
  //     // immutable state based off those changes
  //     state.value += 1;
  //   },
  //   decrement: state => {
  //     state.value -= 1;
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  },
});

//here we need to export these actions called userSlice actions //this gives us access to these two actions outside of the class
export const { login , logout } = userSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const selectUser = state => state.user.user;
//selectors are essentially how do we access , so if i want to get the info out of the user store then all i need to create is something called the selector
//then this selector give me back the value we are after
export default userSlice.reducer;
