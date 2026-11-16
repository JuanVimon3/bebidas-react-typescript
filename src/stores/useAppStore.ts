import { create } from 'zustand';
import { createRecipeSlice, type RecipeSlice } from './recipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipeSlice>()(devtools((...a) => ({
  ...createRecipeSlice(...a),
})));