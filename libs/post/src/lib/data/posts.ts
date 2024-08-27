import { createApi } from '@reduxjs/toolkit/query/react';
import { gql } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const postStatuses = ['draft', 'published', 'pending_review'] as const;

export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  status: (typeof postStatuses)[number];
  created_at: string;
  updated_at: string;
}

export interface Pagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

export interface GetPostsResponse extends Pagination {
  data: {
    posts: Post[];
  };
}

interface PostResponse {
  data: {
    post: Post;
  };
}

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: graphqlRequestBaseQuery({
      url: 'http://localhost:3006',
    }),
    endpoints: (builder) => ({
      getPost: builder.query<Post, string>({
        query: () => ({
          document: gql`
            query GetPost {
              allPosts {
                id
                title
                author
                content
                status
              }
            }
          `,
        }),
      }),
    }),
  });


export const { useGetPostQuery } = postsApi;
