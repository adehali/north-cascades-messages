import { create } from "zustand";

const useStore = create( ( set ) =>(
  
    {
        favorites: [],
        addToFavorites: ( newFavorite )=>{
            set( ( state )=>( { favorites: [...state.favorites, newFavorite ] } ) )
        }
    }
    //////// below will always be the same
))

export default useStore;