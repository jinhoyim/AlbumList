import axios from 'axios';
import { XAPIKEY } from '../constants/ApiKey';

export const getArtists = (status) => {
  return axios.get(`https://url/v1/artists`,{
    headers: {
      "x-api-key": XAPIKEY
    }
  }).then(function(response){
    return response.data.Items;
  });
};

export const getArtist = (artistId) => {
  return axios.get(`https://url/v1/albums/${artistId}`,{
    headers: {
      "x-api-key": XAPIKEY
    }
  }).then(function(response){
    return response.data.Item;
  });
};