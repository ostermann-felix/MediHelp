import styled from 'styled-components';

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Main Site</h1>{' '}
      <Link href="/categories">
        <a>Categories</a>
      </Link>
    </div>
  );
}
