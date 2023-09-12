import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/",
  }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      providesTags: ["account"],
      transformResponse: (response) => response.sort((a, b) => b.id - a.id),
    }),
    addAccounts: builder.mutation({
      query: (amount: number, id: number) => ({
        url: "account",
        method: "POST",
        body: {amount, id},
      }),
      invalidatesTags: ["account"],
    }),
    updateAccount: builder.mutation({
      query: ({id, amount}: {id: number; amount: number}) => ({
        url: `account/${id}`,
        method: "PATCH",
        body: {amount},
      }),
      invalidatesTags: ["account"],
    }),
    deleteAccounts: builder.mutation({
      query: (id: number) => ({
        url: `account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["account"],
    }),
  }),
});
export const {
  useGetAccountsQuery,
  useAddAccountsMutation,
  useDeleteAccountsMutation,
  useUpdateAccountMutation,
} = adminApi;
