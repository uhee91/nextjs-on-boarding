// src/pages/admin.tsx 또는 src/app/admin/page.tsx (Next.js의 파일 기반 라우팅에 따라)
import Header from '@/shareds/components/Header';
import LeftNavigator from '@/shareds/components/LeftNavigator';
import Content from '@/features/admin/V1/components/Content';
import RightNavigator from '@/shareds/components/RightNavigator';
import Footer from '@/shareds/components/Footer';

export default function Admin() {
    return (
        <div>
            <Header />
            <LeftNavigator />
            <Content />
            <RightNavigator />
            <Footer />
        </div>
    );
}