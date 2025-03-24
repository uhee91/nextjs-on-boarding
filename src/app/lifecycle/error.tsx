'use client';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
    return (
        <div className="p-6">
            <h2 className="text-red-500 font-bold">❌ 에러 발생:</h2>
            <pre>{error.message}</pre>
            <button
                onClick={reset}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
                다시 시도</button>
        </div>
    );
}