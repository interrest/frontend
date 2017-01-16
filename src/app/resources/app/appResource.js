import {Schema} from 'normalizr';

import baseResource from '../baseResource';

const appSchema = new Schema('apps');

const appResource = new baseResource('App', {
  url: '/app/',
  schema: appSchema
});

export default appResource;
