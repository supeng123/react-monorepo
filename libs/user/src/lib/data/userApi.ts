import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from './usertypes';
import { faker } from '@faker-js/faker';

type UsersResponse = UserType[];

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  tagTypes: ['User'],
  endpoints(builder) {
    return {
      fetchUsers: builder.query<UsersResponse, void>({
        query: () => {
          return {
            url: '/users',
            method: 'GET',
          };
        },
        providesTags:[{ type: 'User', id: 'LIST' }]
      }),
      removeUser: builder.mutation({
        query: (user: UserType) => {
          return {
            url:`/users/${user.id}`,
            method: 'DELETE'
          }
        },
        invalidatesTags: [{ type: 'User', id: 'LIST' }]
      }),
      addUser: builder.mutation({
        query: () => {
          return {
            url:'/users',
            method: 'POST',
            body: {
              name: faker.name.fullName()
            },
          }
        },
        invalidatesTags: [{ type: 'User', id: 'LIST' }]
      })
    };
  },
});

export const {
  useFetchUsersQuery,
  useRemoveUserMutation,
  useAddUserMutation
} = usersApi;
export { usersApi };
