import { HttpResponse } from 'msw';

import { lockerLocations } from './mockData';

export const lockerLocationsHandler = () => {
  return HttpResponse.json([lockerLocations]);
};
