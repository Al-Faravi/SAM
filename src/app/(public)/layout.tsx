export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* TODO: Navbar will be added here */}
      
      <main className="flex-grow">
        {children}
      </main>

      {/* TODO: Footer will be added here */}
    </div>
  );
}