// ✅ 4. 라우팅 그룹 (group): (auth)
// app/(auth)/login/page.tsx
export default function LoginPage() {
    return (
        <div>
            <h1>🔐 로그인 페이지</h1>
            <form className="space-y-2">
                <input type="text" placeholder="아이디" className="border p-2 rounded w-full" />
                <input type="password" placeholder="비밀번호" className="border p-2 rounded w-full" />
                <button className="px-4 py-2 bg-blue-500 text-white rounded">로그인</button>
            </form>
        </div>
    );
}
// URL:
// /login → 로그인 폼 렌더링
// /register → 회원가입 폼 렌더링