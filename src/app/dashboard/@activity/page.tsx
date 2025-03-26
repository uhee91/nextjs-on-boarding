// app/dashboard/@activity/page.tsx
export default function ActivityPanel() {
    return (
        <div>
            <h3>📌 실시간 활동</h3>
            <ul>
                <li>유저1: 글 작성</li>
                <li>유저2: 댓글 등록</li>
                <li>유저3: 로그인</li>
            </ul>
        </div>
    );
}

// ✅ 결과: /dashboard 접근 시 → 좌측에 메인, 우측에 병렬로 실시간 활동 영역 출력
