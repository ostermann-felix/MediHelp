import { getCategoryByName } from '../../src/services/lessonService';
import Image from 'next/image';
import Link from 'next/link';

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
      <Image
        src={lessons[0]?.category.visual}
        alt="category visual"
        width={70}
        height={70}
      />
      <h2>{category}</h2>
      {lesson.process.map((process, index) => {
        return (
          <>
            <Link href={`/lessons/${lesson.id}`} alt="" key={lesson.id}>
              {lesson.name}
            </Link>
          </>
        );
      })}
    </>
  );
}
