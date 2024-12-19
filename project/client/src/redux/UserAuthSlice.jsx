import { createSlice }  from '@reduxjs/toolkit'

const UserAuthSlice = createSlice({
    name : "useruath",
    initialState : false,
    reducers : {
        loggedIn(){
            return true;
        },
        loggedOut(){
            return false;
        }
    }
});

export default UserAuthSlice.reducer;

export let {loggedIn, loggedOut} = UserAuthSlice.actions;