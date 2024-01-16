import { http } from 'msw';

import { lockerLocationsHandler } from './lockerhandlers';

export const handlers = [http.get('/api/v1/lockers/locations', lockerLocationsHandler)];
