import { getPostById, getCommentsByPostId } from '@/features/lifecyle/V1/services/getCount';
import { notFound } from 'next/navigation';
import { CommentForm } from '@/features/lifecyle/V1/components/lifecycle';
// import { useCommentStore } from '@/features/lifecyle/V1/stores/lifecycle-store';

export default async function PostDetailPage({ params }: { params: { id: string } }) {
    const post = await getPostById(params.id);
    if (!post) notFound();

    const comments = await getCommentsByPostId(params.id);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">📝 Post Detail</h1>
            <p className="text-lg mt-2">제목: {post.title}</p>
            <p className="text-sm text-gray-600 mt-1">내용: {post.content}</p>

            <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">💬 댓글 목록</h2>
                {comments.length > 0 ? (
                    <ul className="space-y-2">
                        {comments.map((comment) => (
                            <li key={comment.id} className="p-2 border rounded bg-gray-50">
                                <p className="text-sm font-medium">👤 {comment.author}</p>
                                <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-400">아직 댓글이 없습니다.</p>
                )}
            </div>

            <div className="mt-8">
                <CommentForm postId={params.id} initialComments={comments} />
            </div>
        </div>
    );
}

