import { Novu } from '@novu/node'; 

const novu = new Novu('<API_KEY>');

novu.trigger('sandbox-is-ready', {
  to: { 
    subscriberId: '<REPLACE_WITH_USER_ID>', 
  },
  payload: {
     
  }
});