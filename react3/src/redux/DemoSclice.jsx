import { createSlice } from '@reduxjs/toolkit'

let DemoSlice = createSlice({
    name : "demo",
    initialState : 1000,
    reducers : {
        changeName(){
            return "Vijay";
        },
        chnageName2(){
            return "Amar";
        },
        chnageName3(){
            return "Gaurav";
        },
        chnageName4(currentState, value){
            return currentState + parseInt(value.payload);
        }
    }
});

export let {changeName, chnageName2, chnageName3, chnageName4} = DemoSlice.actions;

export default DemoSlice.reducer;