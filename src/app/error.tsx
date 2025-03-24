// ✅ app/error.tsx (전역 에러 처리용)
'use client';

interface GlobalErrorProps {
    error: Error;
    reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
    return (
        <html>
        <body className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">🌐 전역 에러 발생</h1>
        <p className="text-gray-800">{error.message}</p>
        <button
            onClick={reset}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
            다시 시도하기
        </button>
        </body>
        </html>
    );
}