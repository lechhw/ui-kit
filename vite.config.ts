import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readFileSync } from 'fs';

// package.json에서 버전 정보 읽기
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));

export default defineConfig({
    // React와 TypeScript 선언 파일 생성 플러그인 설정
    plugins: [
        react(),
        dts({
            insertTypesEntry: true, // index.d.ts 파일 자동 생성
        }),
    ],
    // 라이브러리 빌드 설정
    build: {
        lib: {
            // 라이브러리 진입점 설정
            entry: resolve(__dirname, 'src/index.ts'),
            // 라이브러리 이름 (UMD 형식에서 사용)
            name: 'UikitReact',
            // 출력 형식 지정 (ES modules, UMD)
            formats: ['es'],
            // 출력 파일 이름 지정
            fileName: (format) => `ui-kit-react.${format}.js`,
        },
        // Rollup 번들러 설정
        rollupOptions: {
            // 외부 의존성 설정 (번들에 포함하지 않음)
            external: ['react', 'react-dom'],
            output: {
                // 전역 변수 설정 (UMD 번들에서 사용)
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        // 소스맵 생성 (디버깅에 유용)
        sourcemap: true,
    },
    // 환경 변수 정의 (빌드 시 코드에 삽입됨)
    define: {
        'process.env.VERSION': JSON.stringify(packageJson.version),
    },
});
