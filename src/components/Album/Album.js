import React from 'react';
import './Album.css';

const Album = ({albumId, cover, title, artistName, releaseAt, status, showDialog}) => (
  <li className="Album">
    <button onClick={() => showDialog(albumId)}><img src={cover} alt={title} /></button>
    <div>
      <div className="album-title-info">
        <strong>{title}</strong>
        <p>{artistName}</p>
      </div>
      <div className="album-detail-info">
        <p>앨범 오픈일</p>
        <p>{releaseAt}</p>
        <span className={`album-status album-status-${status}`}>{status === '1' ? '임시 저장' : status === '2' ? '발매 진행중' : '발매 완료'}</span>
      </div>
    </div>

  </li>
);

export default Album;