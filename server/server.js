const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Render에서 제공하는 PORT 환경 변수 사용

let comments = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // 정적 파일 서빙 (index.html, topic.html 등)

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).send('Comment added');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
