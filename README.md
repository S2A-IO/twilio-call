# twilio-call
To make calls via Twilio
- [Installation](#installation)
- [Usage Example](#usage-example)

## Installation
  ```
npm install git://github.com/S2A-IO/twilio-call --save
  ```
twilio-call has the peerDependencies of twilio we have to install it.
```
npm install twilio@3.18.0 --save
```
## Usage Example
```
// Please change the parameters with valid values and parameters to run the case
data.env = {
  accountSid: 'ACcf19980c1b7d8bbc9816738989fbd1be',
  authToken: '5bd474895c2019134c8b5ebd532cff82'
};
// Please change the parameters with valid values and parameters to run the case
data.current = {
  to : '+923315572435',
  from : '+14103046211',
  message : 'Your Login Code Is 3 5 6 9 1',
  url: 'https://handler.twilio.com/twiml/EH864c41bb1e38e2ced350b878292c58e8?message='
};
```

| Field    | Description      | Required       |
|----------|-------------|----------------|
| data   | Data passed to this function.  | **YES** |
| context      | Client context. Unused. | **YES** |
| callback      | Callback function to pass back the response. | **YES** |
  ```
const makeCall = require('./call/index');

makeCall.handler(correctParams, context, function testHandler ( error, res) {
  if ( error ) {
    console.log('error',error);
  } else {
    console.log('res',res);
  }
});
  ```
