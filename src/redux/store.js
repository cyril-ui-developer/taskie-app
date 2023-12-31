import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './taskSlice'

function store() {
    const store = configureStore({
      reducer: tasksSlice.reducer,
      preloadedState: [
        { id: 1098754345678, title: "Lorem ipsum dolor sit", description: "Incididunt ut labore et dolore magna aliqua. Ut enim", completed: true,  active: false }, 
        { id: 2009876543456, title: "Utenim ad minim ven", description: "Kexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", completed: false, active: false}
      ]
    });
    return store;
  }

  export default store