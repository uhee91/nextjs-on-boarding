'use client';
import { create } from 'zustand';

interface LifeCycleState {
    mounted: boolean;
    count: number;
    setMounted: (v: boolean) => void;
    setCount: (v: number) => void;
    increment: () => void;
}

export const useLifeCycleStore = create<LifeCycleState>((set) => ({
    mounted: false,
    count: 0,
    setMounted: (v) => set({ mounted: v }),
    setCount: (v) => set({ count: v }),
    increment: () => set((state) => ({ count: state.count + 1 })),
}));

// ✅ stores/comment-store.ts
// import { create } from 'zustand';

interface Comment {
    id: string;
    author: string;
    content: string;
}

interface CommentStore {
    comments: Comment[];
    setComments: (comments: Comment[]) => void;
    addLocalComment: (comment: Comment) => void;
}

export const useCommentStore = create<CommentStore>((set) => ({
    comments: [],
    setComments: (comments) => set({ comments }),
    addLocalComment: (comment) => set((state) => ({ comments: [...state.comments, comment] })),
}));
