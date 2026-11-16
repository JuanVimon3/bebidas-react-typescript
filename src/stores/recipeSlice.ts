import type { StateCreator } from 'zustand';
import { getCategories, getRecipes } from '../services/RecipeService';
import type { Categories, SearchFilter, Drinks } from '../types';

export type RecipeSlice = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipeSlice: StateCreator<RecipeSlice, [], [], RecipeSlice> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories();
        set({ categories });
    },
    searchRecipes: async (searchFilters: SearchFilter) => {
        const drinks = await getRecipes(searchFilters);
        set({ drinks });
    }
});