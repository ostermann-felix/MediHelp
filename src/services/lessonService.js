import dbConnect from '../../dbConnect';
import Lesson from '../../models/Lesson';

export default async function getAllLessons() {
  await dbConnect();

  const lessons = await Lesson.find();
  const lessonsList = lessons.map(({ id, name, process }) => {
    return { id, name, process };
  });

  return lessonsList;
}

export async function getLessonById(lessonId) {
  await dbConnect();

  const lesson = await Lesson.findById(lessonId);
  const { id, process, name } = lesson;
  return { id, process, name };
}
