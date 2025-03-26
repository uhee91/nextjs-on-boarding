// app/docs/layout.tsx
export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* 필요시 공통 UI 또는 스타일 포함 */}
            {children}
        </div>
    );
}