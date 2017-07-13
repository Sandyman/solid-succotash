'use strict';

module.exports.handler = (event, context, callback) => {

  callback(null, { message: `You said: '${event.msg}'.` });
};
