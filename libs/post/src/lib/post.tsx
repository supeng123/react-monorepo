import {
  useGetPostQuery,
  useGetUsersQuery,
  useGetUserQuery,
  useGetCommentQuery,
} from './data/posts';

export const PostsManager = () => {
  const result = useGetPostQuery();
  const users = useGetUsersQuery();
  const user = useGetUserQuery('123');
  const comment = useGetCommentQuery('987');
  // console.log(result);
  // console.log(users);
  console.log(comment);

  return <>{result.status}</>;
};

export default PostsManager;
