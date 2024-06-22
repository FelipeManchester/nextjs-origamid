import Link from 'next/link';
import fs from 'fs/promises';
import Menu from '@/components/Menu';

export default async function Home() {
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');

  const data = await fs.readFile('acesso.txt', 'utf8');
  return (
    <main>
      <Menu />
      <h1>Home</h1>
      <div>{data}</div>
    </main>
  );
}
