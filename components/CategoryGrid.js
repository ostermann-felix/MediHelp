import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export default function CategoryGrid({ lessons }) {
  console.log(lessons);
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

const CatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  background-color: hotpink;
`;

const CatLink = styled.a`
  background-color: lightgray;
  width: 70px;
  height: 70px;
`;

const IconBox = styled.div`
  width: 75px;
`;
