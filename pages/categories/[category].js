import { getCategoryByName } from '../../src/services/lessonService';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export async function getServerSideProps(context) {
  const { category } = context.params;
  const lessons = await getCategoryByName(category);
  return {
    props: {
      lessons: lessons,
      category: category,
    },
  };
}

export default function lessonPage({ category, lessons }) {
  return (
    <>
      <CategoryWrapper>
        <IconBox>
          <Image
            src={lessons[0]?.category.visual}
            alt="category visual"
            width={70}
            height={70}
          />
        </IconBox>
        <h2>{category}</h2>
      </CategoryWrapper>
      {lessons.map((lesson, index) => {
        return (
          <>
            {/* <p key={index}>{lesson.instruction}</p> */}

            <Link href={`/lessons/${lesson.id}`} alt="" key={lesson.id}>
              {lesson.name}
            </Link>
          </>
        );
      })}
    </>
  );
}

const CategoryWrapper = styled.div`
  display: flex;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  margin-right: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  height: 80px;
  width: 80px;
`;
