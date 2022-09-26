import Link from 'next/link';

function Categories() {
  return (
    <>
      <h1>Categies Site</h1>
      <Link href="/content/content1">
        <a>Content1</a>
      </Link>
      <Link href="/content/content2">
        <a>Content2</a>
      </Link>
    </>
  );
}

export default Categories;
