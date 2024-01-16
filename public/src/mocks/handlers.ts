import { http } from 'msw';

import { getHomePageHandler } from './homeHandler';
import { lockerLocationsHandler } from './lockerHandler';

export const handlers = [
  http.get('/api/v1/home', getHomePageHandler),
  http.get('/api/v1/lockers/locations', lockerLocationsHandler),
];
