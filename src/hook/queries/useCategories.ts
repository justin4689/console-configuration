import { useQuery } from '@tanstack/react-query';
import { categoryService } from '@/services';
import { queryKeys } from './keys';

export const useCategories = (filters = {}, options = {}) => {
  return useQuery({
    queryKey: queryKeys.categories.list(filters),
    queryFn: () => categoryService.getCategories(filters),
    staleTime: 5 * 60 * 1000,
    ...options,
  });
};

export const useCategory = (id: string | undefined, options = {}) => {
  return useQuery({
    queryKey: queryKeys.categories.detail(id),
    queryFn: () => categoryService.getCategoryById(id),
    enabled: !!id,
    ...options,
  });
};
