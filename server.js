// server.js

const express = require('express');
const app = express();

// CORS 설정
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인에서 요청 허용
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// 정적 파일 제공 (모델 파일이 위치한 디렉토리)
app.use(express.static('my_model'));

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});