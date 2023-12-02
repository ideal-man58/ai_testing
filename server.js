const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let lastResult = null; // 가장 최근의 결과를 저장하는 변수

app.post('/upload-image', (req, res) => {
    const { image } = req.body;
    console.log('Received image:', image);

    // 이미지를 처리하고 결과를 얻는 작업 수행
    // 예제: 결과를 저장
    lastResult = 'classification result';

    res.json({ success: true });
});

app.get('/get-last-result', (req, res) => {
    // 최근 결과를 클라이언트에 반환
    res.json({ result: lastResult });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

