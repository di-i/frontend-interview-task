import { ApiService } from './ApiService';
import Helpers from '../helpers/Helpers';

export const ABTestService = {};

ABTestService.getAll = async function () {
  const sites = await ApiService.getAllSites();
  const tests = await ApiService.getAllABTests();
  let cachedSites = {};
  sites.forEach((item) => {
    cachedSites[item.id] = item.url;
  });
  for (let test of tests) {
    let type = Helpers.titleCase(test.type);
    let status = Helpers.titleCase(test.status);
    let siteId = test.siteId;
    test['site'] = cachedSites[siteId];
    test.type = type;
    test.status = status;
  }
  return tests;
};

