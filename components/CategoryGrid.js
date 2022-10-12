import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryGrid({ lessons }) {
  console.log(lessons);
  return (
    <CatGrid>
      {lessons &&
        lessons.map((lesson) => (
          <IconBox key={lesson.id}>
            <Link href={`/categories/${lesson.category.name}`} passHref>
              <CatLink>
                <Image
                  src={lesson.category.visual}
                  alt="category image"
                  width={150}
                  height={150}
                />
              </CatLink>
            </Link>
          </IconBox>
        ))}
    </CatGrid>
  );
}

const CatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-content: center;
  padding: 5%;
`;

const CatLink = styled.div``;

const IconBox = styled.div`
  border: solid black 2px;
  justify-self: center;
  background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(227, 228, 228, 1) 48%,
    rgba(227, 227, 227, 1) 100%
  );
`;
