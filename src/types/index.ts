import { z } from 'zod';
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse, SearchRecipeSchema } from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;
export type SearchFilter = z.infer<typeof SearchRecipeSchema>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;