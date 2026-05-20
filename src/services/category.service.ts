import { httpClient } from '@/api/httpClient';
import { endpoints } from '@/api/endpoints';

export const categoryService = {
  getCategories: async (params: Record<string, unknown> = {}) => {
    return httpClient.get(endpoints.categories, { params });
  },

  getCategoryById: async (id: string | undefined) => {
    if (!id) throw new Error('Category ID is required');
    return httpClient.get(`${endpoints.categories}/${id}`);
  },

  createCategory: async (data: unknown) => {
    return httpClient.post(endpoints.categories, data);
  },

  updateCategory: async ({ id, data }: { id: string; data: unknown }) => {
    return httpClient.put(`${endpoints.categories}/${id}`, data);
  },

  deleteCategory: async (id: string) => {
    return httpClient.delete(`${endpoints.categories}/${id}`);
  },
};
