var request = require("request");

var options = { method: 'GET',
  url: APIBASE,
  qs: { q: 'my_offers' },
  headers:
   { 'cache-control': 'no-cache',
     authorization: 'Bearer CONSUMERCODE.CONSUMERSECRET',
     'content-type': 'multipart/form-data; boundary=---011000010111000001101001' },
  formData: { phone: '', points: '' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
