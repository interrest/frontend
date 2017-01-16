import {Schema, arrayOf} from 'normalizr';

import baseResource from '../baseResource';

const resourceSchema = new Schema('resources');
const actionSchema = new Schema('actions');

resourceSchema.define({
  actions: arrayOf(actionSchema)
});

const resourceResource = new baseResource('Resource', {
  url: '/resource/',
  schema: resourceSchema
});

export default resourceResource;
