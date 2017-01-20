import React, {Component} from 'react';
import './AlbumDialog.css';

class AlbumDialog extends Component {
  render() {
    const { selectedAlbum, visible, hideDialog } = this.props;

    if(!visible) 
      return null;

    return (
      <div className="AlbumDialog">
        <div className="overlay" onClick={() => hideDialog()}></div>
        <article className="dialog">
          <div className="dialog-button-group">
            <span>◁</span>
            <span>●</span>
            <span>▷</span>
          </div>
          <div className="dialog-album-info">
            <strong>{selectedAlbum.Title}</strong>
            <p>{selectedAlbum.ArtistName}</p>
            <img src={selectedAlbum.Cover} alt={selectedAlbum.Title} />
          </div>
        </article>
      </div>
    );
  }
}

export default AlbumDialog;