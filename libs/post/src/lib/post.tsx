import { useGetPostQuery } from './data/posts';

export const PostsManager = () => {
  const result = useGetPostQuery('');
  console.log(result);

  return <>{result.status}</>;
};

export default PostsManager;
