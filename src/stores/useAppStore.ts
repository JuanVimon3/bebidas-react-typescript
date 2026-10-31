import { create } from 'zustand';
import { createRecipesSlice, type RecipesSlice } from './recipeSlice';
import { devtools } from 'zustand/middleware';

export const useAppStore = create<RecipesSlice>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
})));