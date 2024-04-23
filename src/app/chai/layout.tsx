export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2>Chai Header common</h2>
      {children}
      <h2>Chai Footer common</h2>
    </>
  );
}
