// ✅ app/not-found.tsx (전역 404 처리용)
import Link from "next/link";

export default function NotFound() {
    // return (
    //     <html>
    //     <body className="p-6 text-center">
    //     <h1 className="text-2xl font-bold text-blue-600 mb-2">🔍 페이지를 찾을 수 없습니다</h1>
    //     <p className="text-gray-700">요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p>
    //     <Link
    //         href="/"
    //         className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    //     >
    //         홈으로 이동
    //     </Link>
    //     </body>
    //     </html>
    // );
    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">🔍 페이지를 찾을 수 없습니다</h1>
            <p className="text-gray-700">요청하신 페이지가 존재하지 않거나, 이동되었을 수 있습니다.</p>
            <Link
                href="/"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                홈으로 이동
            </Link>
        </div>
    );
}