import {
  UseMutationOptions,
  DefaultOptions,
  QueryClient,
} from "@tanstack/react-query";

export const queryConfig = {
  queries: {
    // throwOnError: true,
    refetchOnWindowFocus: false,
    // retry: false,
    staleTime: 1000 * 60,
  },
} satisfies DefaultOptions;

export const createQueryClient = (onUnauthorized: () => void) => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60,
        retry: (failureCount, error: any) => {
          if (error?.status === 401) {
            onUnauthorized();
            return false;
          }
          return failureCount < 3;
        },
      },
      mutations: {
        onError: (error: any) => {
          if (error?.status === 401) {
            onUnauthorized();
          }
        },
      },
    },
  });
};

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
  Awaited<ReturnType<FnType>>;

export type QueryConfig<T extends (...args: any[]) => any> = Omit<
  ReturnType<T>,
  "queryKey" | "queryFn"
>;

export type MutationConfig<
  MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
  ApiFnReturnType<MutationFnType>,
  Error,
  Parameters<MutationFnType>[0]
>;
