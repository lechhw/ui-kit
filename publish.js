require('dotenv').config();
const { execSync } = require('child_process');

// 환경 변수가 로드된 상태에서 npm publish 실행
execSync('npm publish', { stdio: 'inherit' });
