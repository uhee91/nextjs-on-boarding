// ✅ 3. Optional Catch-all 라우팅: [[...slug]]
// app/docs/[[...slug]]/page.tsx
export default async function OptionalDocs({ params }: { params: { slug?: string[] } }) {
    const params_ = await params;

    return (
        <div>
            <h1>📂 선택적 문서 페이지</h1>
            <p>{params_.slug?.join(' / ') || '루트 경로입니다.'}</p>
        </div>
    );
}
// URL:
// /optionalCatchAll → "루트 경로입니다."
// /optionalCatchAll/a/b → "a / b"