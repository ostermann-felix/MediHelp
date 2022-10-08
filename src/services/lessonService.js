import dbConnect from '../../dbConnect';
import Lesson from '../../models/Lesson';

export default async function getAllLessons() {
  await dbConnect();

  const lessons = await Lesson.find();
  const lessonsList = lessons.map(({ id, name, process, category }) => {
    return { id, name, process, category };
  });

  return lessonsList;
}

export async function getLessonById(lessonId) {
  await dbConnect();

  const lesson = await Lesson.findById(lessonId);
  const { id, process, name, category } = lesson;
  return { id, process, name, category };
}

export async function getCategoryByName(categoryName) {
  await dbConnect();

  const lessons = await Lesson.find();
  const lessonsList = lessons
    .map(({ id, name, process, category }) => {
      return { id, name, process, category };
    })
    .filter((lesson) => {
      return lesson.category.name === categoryName;
    });
  return lessonsList;
}
