import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1 * 60 * 1000, // обновление кеша
      gcTime: 10 * 60 * 1000, // очистка кеша
      retry: 2, // кол-во попыток
      retryDelay: 1000, // задержка между попытками
    },
  },
});
