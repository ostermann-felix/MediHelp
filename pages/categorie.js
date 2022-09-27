import Link from 'next/link';

function Categorie() {
  return (
    <>
      <h1>Categorie Site</h1>
      <Link href="/content/StabileSeitenlage">
        <a>Stabile Seitenlage</a>
      </Link>
      <Link href="/content/LaienReanimation">
        <a>Laien Reanimation</a>
      </Link>
    </>
  );
}

export default Categorie;
