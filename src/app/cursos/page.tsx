import { getCursos } from '@/api/cursos';
import Link from 'next/link';
import React from 'react';

const CursosPge = async () => {
  const cursos = await getCursos();
  return (
    <div>
      <h1>Cursos disponíveis:</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CursosPge;
