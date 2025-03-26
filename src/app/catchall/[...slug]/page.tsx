// ✅ 2. Catch-all 라우팅: [...slug]
// app/docs/[...slug]/page.tsx
export default async function DocsPage({ params }: { params: { slug: string[] } }) {
    const parmas_ = await params;


    return (
        <div>
            <h1>📚 문서 경로</h1>
            <p>{parmas_.slug?.join(' / ')}</p>
        </div>
    );
}
// URL:
// /docs/a → "a"
// /docs/a/b → "a / b"