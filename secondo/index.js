'use strict';

/**
 * Function that basically sends back what it got
 * @param event
 * @param context
 * @param callback
 */
module.exports.handler = (event, context, callback) => {
  // The body is only a callback
  callback(null, { message: `You said: '${event.msg}'.` });
};
