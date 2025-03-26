// app/@nav/page.tsx
export default function SidebarNav() {
    return (
        <nav>
            <ul className="space-y-2">
                <li><a href="/">🏠 홈</a></li>
                <li><a href="/login">🔐 로그인</a></li>
                <li><a href="/register">🧾 회원가입</a></li>
                <li><a href="/docs">📚 문서</a></li>
                <li><a href="/dashboard">📊 대시보드</a></li>
            </ul>
        </nav>
    );
}