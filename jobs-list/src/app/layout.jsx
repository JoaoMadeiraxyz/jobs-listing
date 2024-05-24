import "./globals.css";

export const metadata = {
  title: "Jobs List",
  description: "List of remote jobs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
