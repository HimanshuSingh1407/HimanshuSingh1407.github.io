import { createSlice } from '@reduxjs/toolkit'

 const navbarSlice = createSlice({
  name: 'navShift',
  initialState: {
      home:0,
    about :0,
    skill:0,
    project:0,
    contact:0

  },
  reducers: {
 
    setValHome: (state, action) => {
      state.home = action.payload
    },
    setValAbout: (state, action) => {
      state.about = action.payload
    },
    setValSkill: (state, action) => {
      state.skill = action.payload
    },
    setValProject: (state, action) => {
      state.project = action.payload
    },
    setValContact: (state, action) => {
      state.contact = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setValHome, setValAbout, setValSkill,setValProject,setValContact } = navbarSlice.actions

export default navbarSlice.reducer