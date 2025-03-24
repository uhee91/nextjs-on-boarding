'use server';

export async function getCountFromServer(): Promise<number> {
    // 예: 서버 DB/API 호출
    console.log('[server action] getCountFromServer called');
    // ❌ 강제 에러 발생
    // throw new Error('서버에서 카운트를 가져오는 데 실패했습니다!');

    // return -1;

    // 서버에서 받은 초기값이라고 가정
    return 7;
}

export async function getCountFromServer2With404(): Promise<number> {
    return -1; // 강제로 404 발생
}

export async function getCountFromServerWithException(): Promise<number> {
    throw new Error('서버에서 카운트를 가져오는 데 실패했습니다!');
}

// 'use server';

export async function getPostById(id: string) {
    console.log('[server action] getPostById called with id:', id);

    // 예: 존재하지 않는 ID는 null 반환
    if (id === '404') return null;

    return {
        id,
        title: `Post 제목 - ${id}`,
        content: `이것은 ${id}번 글의 내용입니다.`,
    };
}

// 'use server';

export async function getCommentsByPostId(postId: string) {
    console.log('[server action] getCommentsByPostId called with postId:', postId);

    // 예시: postId에 따라 댓글 달리 반환
    if (postId === '505') return [];

    return [
        {
            id: 'c1',
            author: '홍길동',
            content: `${postId}번 글에 대한 첫 번째 댓글입니다.`,
        },
        {
            id: 'c2',
            author: '김철수',
            content: `${postId}번 글에 대한 두 번째 댓글입니다.`,
        },
    ];
}

// 'use server';
// import { revalidatePath } from 'next/cache';
// export async function addComment(postId: string, formData: FormData) {
//     const author = formData.get('author')?.toString() || '익명';
//     const content = formData.get('content')?.toString() || '';
//
//     console.log(`[server action] Add comment to post ${postId}:`, { author, content });
//
//     // 여기서 실제 DB에 저장하거나 외부 API 호출 가능
//
//     revalidatePath(`/post/${postId}`); // ✅ 새로고침 없이 목록 반영되도록 트리거
//     return { success: true };
// }

export async function addComment(postId: string, formData: FormData) {
    const author = formData.get('author')?.toString() || '익명';
    const content = formData.get('content')?.toString() || '';

    console.log(`[server action] Add comment to post ${postId}:`, { author, content });

    // 서버 DB 저장 또는 외부 API 호출 (생략)

    return {
        id: Math.random().toString(36).substring(2),
        author,
        content,
    };
}