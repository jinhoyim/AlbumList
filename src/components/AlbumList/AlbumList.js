import React from 'react';
import {Album} from '../';
import './AlbumList.css';

const AlbumList = ({albums, showDialog}) => {
  const albumList = albums.map(
    (album, i) => {
      return (
        <Album
          albumId={album.AlbumId}
          cover={album.Cover}
          title={album.Title}
          artistName={album.ArtistName}
          releaseAt={album.ReleaseAt}
          status={album.Status}
          showDialog={showDialog}
          key={i}
        />
      );
    }
  );

  return (
    <ul className="AlbumList">
      {albumList}
    </ul>
  );
};

export default AlbumList;