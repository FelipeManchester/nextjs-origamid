import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div>
      <ul className='menu'>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/contato'}>Contato</Link>
        </li>
        <li>
          <Link href={'/sobre'}>Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;