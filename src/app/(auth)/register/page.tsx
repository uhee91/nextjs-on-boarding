// app/(auth)/register/page.tsx
export default function RegisterPage() {
    return (
        <div>
            <h1>🧾 회원가입 페이지</h1>
            <form className="space-y-2">
                <input type="text" placeholder="이름" className="border p-2 rounded w-full" />
                <input type="email" placeholder="이메일" className="border p-2 rounded w-full" />
                <input type="password" placeholder="비밀번호" className="border p-2 rounded w-full" />
                <button className="px-4 py-2 bg-green-500 text-white rounded">가입하기</button>
            </form>
        </div>
    );
}
// URL:
// /login → 로그인 폼 렌더링
// /register → 회원가입 폼 렌더링