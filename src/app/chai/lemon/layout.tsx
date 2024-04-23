export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <h2>Lemon Header common</h2>
        {children}
        <h2>Lemon Footer common</h2>
      </>
    );
  }
  