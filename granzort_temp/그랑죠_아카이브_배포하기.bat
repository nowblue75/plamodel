@echo off
setlocal
chcp 65001 > nul

echo ============================================================
echo [그랑죠 아카이브] GitHub 자동 배포 도우미
echo ============================================================
echo.
echo 대상 저장소: https://github.com/nowblue75/plamodel
echo 대상 경로: /granzort
echo.

:: 1. Git 초기화 확인
if not exist ".git" (
    echo [1/4] Git 초기화를 시작합니다...
    git init
    git branch -M main
) else (
    echo [1/4] 이미 Git이 초기화되어 있습니다.
)

:: 2. 원격 저장소 연결 확인 및 설정
git remote | findstr "origin" > nul
if %errorlevel% neq 0 (
    echo [2/4] 원격 저장소를 연결합니다: https://github.com/nowblue75/plamodel.git
    git remote add origin https://github.com/nowblue75/plamodel.git
) else (
    echo [2/4] 이미 원격 저장소가 연결되어 있습니다.
)

:: 3. 파일 추가 및 커밋
echo [3/4] 변경 사항을 커밋합니다...
git add .
git commit -m "feat: Granzort Archive Premium UI (nowblue75/plamodel/granzort)"

:: 4. 푸시
echo [4/4] GitHub로 업로드를 시작합니다 (인증 창이 뜰 수 있습니다)...
echo.
git push -u origin main

if %errorlevel% neq 0 (
    echo.
    echo [오류] 업로드 중 문제가 발생했습니다. 
    echo 1. GitHub에서 'plamodel' 저장소를 미리 생성했는지 확인해주세요.
    echo 2. 로그인(인증)이 정상적으로 완료되었는지 확인해주세요.
) else (
    echo.
    echo [성공] 업로드가 완료되었습니다! 
    echo 잠시 후 https://nowblue75.github.io/plamodel/granzort/ 에서 확인하실 수 있습니다.
)

echo.
pause
