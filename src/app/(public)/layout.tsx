import Navbar from '@/components/shared/header/Navbar';
import NoticeBar from '@/components/features/home/NoticeBar';
import Footer from '@/components/shared/footer/Footer'; // <-- ইম্পোর্ট করো

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <NoticeBar />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer /> {/* <-- এখানে যোগ করো */}
    </div>
  );
}