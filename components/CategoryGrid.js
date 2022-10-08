import styled from 'styled-components';
import Link from 'next/link';
import getAllLessons from '../src/services/lessonService';
import Image from 'next/image';

export async function getServerSideProps() {
  const lessons = await getAllLessons();
  return {
    props: {
      lessons: lessons,
    },
  };
}

export default function CategoryGrid({ lessons }) {
  return (
    <>
      <div>
        <CatGrid>
          {lessons.map((lesson) => (
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

const CatLink = styled.div`
  background-color: lightgray;
  width: 70px;
  height: 70px;
`;

const IconBox = styled.div`
  width: 75px;
`;
