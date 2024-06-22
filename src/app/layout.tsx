import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NextJS - Origamid',
  description:
    'Projeto criado pela Origamid - Desenvolvido por Felipe Manchester',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
}
