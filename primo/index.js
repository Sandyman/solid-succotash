'use strict';
const AWS = require('aws-sdk');

/**
 * Make sure to define the environment variables mentioned
 * here in .env in your service directory.
 * @type {undefined}
 */
const endpoint = process.env.SERVERLESS_SIMULATE
  ? process.env.SERVERLESS_SIMULATE_LAMBDA_ENDPOINT
  : undefined;

/**
 * I believe region is mandatory, and endpoint determines
 * where the invoke command will try to run your lambda.
 * @type {Lambda}
 */
const lambda = new AWS.Lambda({ region: 'us-east-1', endpoint });

/**
 * This is the entry point for primo
 * @param event
 * @param context
 * @param callback
 */
module.exports.handler = (event, context, callback) => {
  /*
   * Create parameters object to pass to the invoke function
   */
  const params = {
    FunctionName: 'secondo-dev-secondo',
    Payload: JSON.stringify({ msg: 'Hello, world!' }),
  };

  /*
   * Invoke the "remote" lambda
   */
  lambda.invoke(params, (err, res) => {
    console.log(err ? err : JSON.parse(res.Payload).message);

    return callback(null, { message: 'Your function executed successfully!' });
  })
};
