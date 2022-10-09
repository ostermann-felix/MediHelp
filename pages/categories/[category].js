import { getCategoryByName } from '../../src/services/lessonService';

export async function getServerSideProps(context) {
  const { category } = context.params;
  const lesson = await getCategoryByName(category);
  return {
    props: {
      lesson: lesson,
      category: category,
    },
  };
}

export default function lessonPage({ lesson, category }) {
  console.log(lesson, 'Apfel');

  return (
    <>
      <h2>{category}</h2>
      {lesson.process.map((process, index) => {
        return (
          <>
            <h3 key={`${index} ${process.name}`}>{process.name}</h3>
            <p key={index}>{process.instruction}</p>
            <Image key={`${process.name} ${index}`} alt="instruction visual">
              {process.visual}
            </Image>
          </>
        );
      })}
    </>
  );
}
