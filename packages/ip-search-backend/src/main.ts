import * as express from 'express';

const app = express();
const axios = require('axios');

app.get('/api', (req, res) => {
  const ip = req.query.ip;
  const endpoint = `http://ip-api.com/json/${ip}?fields=status,message,country,city,query`;
  
  axios.get(endpoint)
  .then(ipApiRequest => {
    if(ipApiRequest.data.status === "fail"){
      // There is a timeout so you can see the loading spinner
      setTimeout(() => res.send(), 2000);
    }
    else
    {
      // There is a timeout so you can see the loading spinner
      setTimeout(() => res.send(ipApiRequest.data), 2000);
    }
  })
  .catch(err => {
    console.log('Error: ', err.message);
  });
 
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
