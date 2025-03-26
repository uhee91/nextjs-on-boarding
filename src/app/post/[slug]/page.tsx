// ✅ 1. 기본 동적 라우팅: [slug]
// app/post/[slug]/page.tsx
export default function PostDetail({ params }: { params: { slug: string } }) {
    return (
        <div>
            <h1>📝 게시글 상세 페이지</h1>
            <p>slug: {params.slug}</p>
        </div>
    );
}
// URL 예: /post/hello-world → "slug: hello-world"