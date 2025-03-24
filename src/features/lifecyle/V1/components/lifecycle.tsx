'use client';

import { useEffect, useCallback, useMemo, useState } from 'react';
import { useLifeCycleStore } from '@/features/lifecyle/V1/stores/lifecycle-store';
import { getCountFromServer } from '@/features/lifecyle/V1/services/getCount';
import ErrorPage from "@/app/lifecycle/error";
import NotFound from '@/app/not-found'
// 서버 전용
// import { notFound } from 'next/navigation'; 

export function LifeCyclePage() {
    const count = useLifeCycleStore((s) => s.count);
    const increment = useLifeCycleStore((s) => s.increment);
    const setMounted = useLifeCycleStore((s) => s.setMounted);
    const setCount = useLifeCycleStore((s) => s.setCount);

    const [hasError, setHasError] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false);

    // 🔵 마운트 시 + 서버 액션 호출 → 상태 저장
    useEffect(() => {
        console.log('✅ 컴포넌트 마운트됨');
        setMounted(true);

        getCountFromServer()
            .then((res) => {
                if (res === -1) {
                    setIsNotFound(true); // 상태 변경으로 NotFound UI 렌더링
                } else {
                    setCount(res);
                }
            })
            .catch((err) => {
                console.log('catch error', err);
                console.error('❌ 서버 액션 에러:', err);
                setHasError(true);
            });

        return () => {
            console.log('❌ 컴포넌트 언마운트됨');
            setMounted(false);
        };
    }, [setMounted, setCount]);

    // 🟢 count가 변경될 때
    useEffect(() => {
        console.log('🔁 count 변경됨:', count);
    }, [count]);

    // ✅ 최적화된 함수 (useCallback)
    const handleIncrement = useCallback(() => {
        increment();
    }, [increment]);

    // ✅ 최적화된 계산 (useMemo)
    const expensive = useMemo(() => {
        console.log('⚙️ 무거운 연산 실행');
        return count * 1000;
    }, [count]);

    if (isNotFound) {
        return <NotFound />;
    }

    if (hasError) {
        return (
            <ErrorPage
                error={new Error('서버에서 데이터를 가져오는 데 실패했습니다.')}
                reset={() => location.reload()}
            />
        );
    }

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">🚀 LifeCycle + Zustand + 최적화 예제</h1>
            <p>✅ 현재 카운트: {count}</p>
            <p>⚙️ 계산 결과(useMemo): {expensive}</p>
            <button
                onClick={handleIncrement}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                +1 증가
            </button>
        </div>
    );
}

// 'use client';

// import { useState } from 'react';
import { addComment } from '@/features/lifecyle/V1/services/getCount';
// import { useRouter } from 'next/navigation';
import { useCommentStore } from '@/features/lifecyle/V1/stores/lifecycle-store';
import { Comment } from '@/features/lifecyle/V1/types/comment';


export function CommentForm({ postId, initialComments }: { postId: string; initialComments: Comment[] }) {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const { comments, setComments, addLocalComment } = useCommentStore();

    useEffect(() => {
        setComments(initialComments);
    }, [initialComments, setComments]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('author', author);
        formData.append('content', content);

        const newComment = await addComment(postId, formData);
        addLocalComment(newComment);

        setAuthor('');
        setContent('');
        setLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-md font-bold">📝 댓글 작성</h3>
                <input
                    name="author"
                    placeholder="작성자"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border p-2 w-full rounded"
                    required
                />
                <textarea
                    name="content"
                    placeholder="댓글 내용을 입력하세요"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="border p-2 w-full rounded"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? '등록 중...' : '등록'}
                </button>
            </form>

            <ul className="mt-6 space-y-2">
                {comments.map((comment) => (
                    <li key={comment.id} className="p-2 border rounded bg-gray-100">
                        <p className="text-sm font-medium">👤 {comment.author}</p>
                        <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
