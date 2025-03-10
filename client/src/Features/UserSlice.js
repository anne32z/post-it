import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../ExampleData";

const initialState = { value: UsersData }; //list of user is an object with empty array as initial value(it doesnt have to be an object but best practice)
//Assign the data from the exampleData
const userSlice = createSlice({
  name: "users", //this is a must.
  initialState, //this is also a must, its actually initialState:initialState but we shorten it.
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload); //add the payload to state
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.email !== action.payload);
    },
    updateUser: (state, action) => {},
  }, // anything we want to do goes here (like update, create, delete)
});
export const { addUser, deleteUser, updateUser } = userSlice.actions; //export the function
export default userSlice.reducer;
