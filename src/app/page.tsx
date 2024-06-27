import fs from 'fs/promises';

import ServerFetch from '@/components/server-fetch';
import ClientFetch from '@/components/client-fetch';

export default async function Home() {
  await fs.appendFile('acesso.txt', `${Date.now()} `, 'utf8');

  const data = await fs.readFile('acesso.txt', 'utf8');
  return (
    <main>
      <h1>Home</h1>
      <div>{data}</div>
      <h1>Server Fetch:</h1>
      <ServerFetch />
      <ClientFetch />
    </main>
  );
}
