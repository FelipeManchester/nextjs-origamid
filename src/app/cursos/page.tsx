import Link from 'next/link';
import React from 'react';

type PageParams = {
  params: {
    slugs: string;
  };
};

type Cursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};
const CursosPage = async ({ params }: PageParams) => {
  const response = await fetch(`https://api.origamid.online/cursos/`);
  const data = (await response.json()) as Cursos[];

  return (
    <div>
      <ul>
        {data.map((cursos) => (
          <li key={cursos.id}>
            <Link href={`/cursos/${cursos.slug}`}>{cursos.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursosPage;
