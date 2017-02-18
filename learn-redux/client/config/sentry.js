import Raven from 'raven-js'
import {sentry_key, sentry_app} from '../keys/sentryKey.js'

export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;


export function logException(ex, context) {

  //////////////////////////////////////////////////////
  //
  // EXAMPLE:
  // logException(new Error('download failed!'), {
  //   email:'trevor@trevorcoleman.design'
  // });
  //
  //////////////////////////////////////////////////////

  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
