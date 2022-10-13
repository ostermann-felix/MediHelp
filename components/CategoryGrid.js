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
                  width={80}
                  height={80}
                />
                <LessonName>{lesson.name}</LessonName>
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
  margin-top: 5%;
  gap: 5%;
`;

const CatLink = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

const IconBox = styled.div`
  align-self: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const LessonName = styled.p`
  text-align: center;
`;
