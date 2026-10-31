import type { StateCreator } from 'zustand';
import { getCategories } from '../services/RecipeService';
import type { Categories } from '../types';

export type RecipesSlice = {
  categories: Categories,
  fetchCategories: () => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipesSlice, [], [], RecipesSlice> = (set) => ({
  categories: {
    drinks: []
  },
  fetchCategories: async() => {
    const categories = await getCategories();
    set({
        categories 
    })
  }
});