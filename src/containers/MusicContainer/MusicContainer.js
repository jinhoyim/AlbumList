import React, {Component} from 'react';
import * as AlbumService from '../../services/album';
import * as ArtistService from '../../services/artist';
import { AlbumList, AlbumFilter, AlbumDialog } from '../../components';

class MusicContainer extends Component{
  constructor(props){
    super();
    this.state = {
      albums: [],
      status: '',
      dialogVisibility: false,
      selectedAlbum: {
        Cover: '',
        Title: '',
        ArtistName: ''
      }
    };
  }

  handleFilterClick = (status) => {
    this.fetchAlbumsInfo(status);
    this.setState({
      status
    });
  };

  showDialog = (selectedAlbumId) => {
    const selectedAlbum = this.getAlbum(selectedAlbumId);
    
    this.setState({
      selectedAlbum,
      dialogVisibility: true
    });
  };

  hideDialog = () => {
    this.setState({
      dialogVisibility: false
    });
  }

  getAlbum = (albumId) => {
    const album = this.state.albums.filter(album => {
      return album.AlbumId === albumId;
    })[0];

    return album || {
      Cover: '',
      Title: '',
      ArtistName: ''
    };
  };

  getArtistName = (artistId, artists) => {
    const artist = artists.filter(artist => {
      return artist.ArtistId === artistId;
    })[0];
    return artist ? artist.Name : '';
  };

  fetchAlbumsInfo = async (status) => {
    try{
      const info = await Promise.all([
        AlbumService.getAlbums(status),
        ArtistService.getArtists()
      ]);

      const albums = info[0];
      const artists = info[1];

      for(let i=0, l=albums.length; i<l;i++)
      {
        albums[i]['ArtistName'] = this.getArtistName(albums[i].ArtistId, artists);
      }

      this.setState({
        albums
      });
    }catch(e){
      console.log(e);
    }
  };

  // fetchAlbums = async (status) => {
  //   try{
  //     const albums = await AlbumService.getAlbums(status);
  //     this.setState({
  //       albums
  //     });
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // };

  // fetchAlbum = async (albumId) => {
  //   try{
  //     const album = await AlbumService.getAlbum(albumId);

  //     this.setState({
  //       album
  //     });
  //   }catch(e){
  //     console.log(e);
  //   }
  // };

  // fetchArtists = async () => {
  //   try{
  //     const artists = await ArtistService.getArtists();
      
  //     this.setState({
  //       artists
  //     });
  //   }
  //   catch(e){
  //     console.log(e);
  //   }
  // };

  // fetchArtist = async (artistId) => {
  //   try{
  //     const artist = await ArtistService.getArtist(artistId);

  //     this.setState({
  //       artist
  //     });
  //   }catch(e){
  //     console.log(e);
  //   }
  // };

  render() {
    const { albums, status, dialogVisibility, selectedAlbum } = this.state;
    return (
      <section>
        <AlbumFilter handleFilterClick={this.handleFilterClick} selectedStatus={status} />
        <AlbumList albums={albums} showDialog={this.showDialog} />
        <AlbumDialog selectedAlbum={selectedAlbum} visible={dialogVisibility} hideDialog={this.hideDialog} />
      </section>
    );
  }

  componentDidMount(){
    this.fetchAlbumsInfo();
  }
}

export default MusicContainer;