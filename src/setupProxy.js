const { createProxyMiddleware } = require('http-proxy-middleware');
const { axios } = require('axios')
module.exports = function(app) {
    app.post('/api/chatgpt', (req, res) => {
        axios.post('https://api.openai.com/v1/engine/davinci-codex/completions', {
          prompt: req.body.prompt,
          max_tokens: req.body.max_tokens,
          temperature: req.body.temperature,
          n: req.body.n,
          stop: req.body.stop
        }, {
          headers: {
            'Content-Type': 'application/json',
            
            'Authorization': `Bearer ${YOUR_API_KEY}`
          }
        })
        .then(response => {
          res.send(response.data);
        })
        .catch(error => {
          console.error(error);
          res.status(500).send(error);
        });
      });
      
};
