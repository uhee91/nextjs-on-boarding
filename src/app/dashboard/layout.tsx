// ✅ 6. 병렬 라우트: 하위 그룹에서 사용
// app/dashboard/layout.tsx
export default function DashboardLayout({ children, activity }: { children: React.ReactNode; activity: React.ReactNode }) {
    return (
        <div>
            <h1>📊 대시보드 레이아웃</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <div style={{ flex: 1 }}>{children}</div>
                <aside style={{ width: '300px', background: '#f9f9f9', padding: '1rem' }}>{activity}</aside>
            </div>
        </div>
    );
}