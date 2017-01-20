import axios from 'axios';
import { XAPIKEY } from '../constants/ApiKey';

export const getAlbums = (status) => {
  const params = status ? { status } : null;
  return axios.get(`https://url/v1/albums`,{
    params: params,
    headers: {
      "x-api-key": XAPIKEY
    }
  }).then(function(response){
    return response.data.Items;
  });
};

export const getAlbum = (albumId) => {
  return axios.get(`https://url/v1/albums/${albumId}`,{
    headers: {
      "x-api-key": XAPIKEY
    }
  }).then(function(response){
    return response.data.Item;
  });
};