// store.js
import { create } from 'zustand';
import { createStore } from 'zustand';

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    clear: () => void;
    isNumberMaxMin: () => void;
    logStore: () => void;
}

// 상태 스토어 생성
export const useCreateCounterStore = create<CounterState>((set,get, store) => ({
    count: 0, // 초기 상태
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    clear: () => set(({ count: 0 })),
    isNumberMaxMin: () => {
        if (get().count >= 99) {
            set((state) => ({count: state.count - 99}));
        }
        else if (get().count >= 0) {
            set((state) => ({count: state.count + 99}));
        }
        else if (get().count < 0) {
            set(() => ({count: 0}));
        }
    },
    logStore: () => {
        console.log(store.getState());  // 스토어의 전체 상태를 출력
    },

}));

// export default useCreateCounterStore;

interface CustomCounterState {
    count: number;
    increment: () => void;
}

export const newStore = createStore<CustomCounterState>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
}));

// export default newStore;
