import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    verifiedProperties: [],
    unverifiedProperties: [],
    mode: "dark"
}

const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        setVerifiedProperties: (state, action) => {
            state.verifiedProperties = action.payload;
        },
        setUnverifiedProperties: (state, action) => {
            state.unverifiedProperties = action.payload;
        },
        setMode: (state, action) => {
            document.documentElement.className = action.payload;
            state.mode = action.payload;
        }
    }
});

export const { setVerifiedProperties, setUnverifiedProperties, setMode } = propertiesSlice.actions;
export default propertiesSlice.reducer;