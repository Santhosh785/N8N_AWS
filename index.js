const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Auto Deployment Demo</title>
        <style>
          body {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
            padding: 50px;
            margin: 0;
          }
          h1 {
            font-size: 3em;
            margin-bottom: 0.2em;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
          }
          p {
            font-size: 1.5em;
            margin-top: 0;
          }
          .rocket {
            font-size: 4em;
            animation: bounce 2s infinite;
            display: inline-block;
            margin-bottom: 20px;
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        </style>
      </head>
      <body>
        <div class="rocket">🚀</div>
        <h1>Welcome to My Auto Deployment Demo!</h1>
        <p>Powered by <strong>AWS Lambda</strong>, <strong>Docker</strong>, and <strong>n8n</strong></p>
        <p>Built & maintained by <em>Santhosh</em></p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
