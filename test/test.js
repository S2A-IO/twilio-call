const makeCall = require('./../call/index');
var assert = require('assert');
let correctParams = {};
let incorrectParams = {};
let context = '';
let status = false;
// Please change the parameters with valid values and parameters to run the test case
correctParams.env = {
  accountSid: 'ACcf19980c1b7d8bbc9816738989fbd1be',
  authToken: '5bd474895c2019134c8b5ebd532cff82'
};
// Please change the parameters with valid values and parameters to run the test case
correctParams.current = {
  to : '+923315572435',
  from : '+14103046211',
  message : 'Your Login Code Is 3 5 6 9 1',
  url: "https://handler.twilio.com/twiml/EH864c41bb1e38e2ced350b878292c58e8?message="
};

describe('call with correct params', function () {
  it('call with correct params', function () {
    makeCall.handler(correctParams, context, function testHandler ( error, res) {
      if ( error ) {
        console.log('error',error);
      } else {
        console.log('res',res);
      }
    });
  })
})
