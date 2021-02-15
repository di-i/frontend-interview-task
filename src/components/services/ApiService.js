import axios from 'axios';

export const ApiService = {};

ApiService.getAllSites = async function () {
  return (await axios.get('/sites')).data;
};

ApiService.getAllABTests = async function () {
  return (await axios.get('/tests')).data;
};

