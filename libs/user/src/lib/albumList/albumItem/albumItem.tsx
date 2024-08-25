import { GoTrash } from 'react-icons/go';
import { Button, ExpandablePanel } from '@react-monorepo/share-ui';
import { useRemoveAlbumMutation } from '../../data/albumApi';
import PhotosList from '../../photoList/photoList';
import { AlbumType } from '../../data/usertypes';

export function AlbumItem({ album }: { album: AlbumType }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        loading={results.isLoading}
        onClick={handleRemoveAlbum}
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumItem;
