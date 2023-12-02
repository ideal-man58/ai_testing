// server.js 파일 생성

const express = require('express');
const multer  = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// 이미지 업로드를 위한 Multer 설정
const storage = multer.memoryStorage(); // 이미지를 메모리에 저장
const upload = multer({ storage: storage });

// 정적 파일 제공 (웹 페이지 및 이미지에 접근하기 위해)
app.use(express.static('public'));

// 업로드된 이미지를 분류하고 결과를 반환하는 엔드포인트
app.post('/upload-image', upload.single('image'), (req, res) => {
    // req.file.buffer에 업로드된 이미지의 데이터가 있음
    // 이 데이터를 Teachable Machine 모델에 전달하여 결과를 얻어옴

    // 여기에 Teachable Machine 모델을 호출하고 결과를 얻는 코드를 추가

    // 결과를 클라이언트에 반환
    res.json({ result: 'classification result' });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
