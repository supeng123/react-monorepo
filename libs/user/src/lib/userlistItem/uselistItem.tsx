import { Button, ExpandablePanel } from '@react-monorepo/share-ui';
import { GoTrash } from 'react-icons/go';
import { UserType } from '../data/usertypes';
import { useRemoveUserMutation } from '../data/userApi';
import { AlbumList } from '../albumList/albumList';

export function UselistItem({ user }: { user: UserType }) {
  const [removexUser, results] = useRemoveUserMutation();

  const handleClick = () => {
    removexUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" onClick={handleClick}>
        <GoTrash />
      </Button>
      {results.error && <div>Error deleting user.</div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UselistItem;
