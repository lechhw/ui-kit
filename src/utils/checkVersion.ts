/**
 * 라이브러리가 정상적으로 설치되었는지 확인하는 함수
 * @returns {string} 라이브러리 버전 정보 메시지
 */
export function checkVersion(): string {
    // package.json에서 읽어온 버전 정보
    // 실제 배포된 패키지에서는 이 값이 빌드 시점의 버전으로 대체됩니다
    const version = '0.1.0';
    return `Simple UI Library 버전 ${version}이 정상적으로 로드되었습니다.`;
}

/**
 * 라이브러리 정상 작동 여부를 콘솔에 출력하는 함수
 */
export function logLibraryInfo(): void {
    console.log('==========================================');
    console.log(checkVersion());
    console.log('GitHub Packages로 배포된 라이브러리입니다.');
    console.log('==========================================');
}
