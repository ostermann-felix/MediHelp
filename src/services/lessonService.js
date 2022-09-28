import dbConnect from '../../dbConnect';
import Lesson from '../../models/Lesson';

export default async function getAllLessons() {
  await dbConnect();

  const lessons = await Lesson.find();
  console.log(lessons);
  const lessonsList = lessons.map(({ id, name, process }) => {
    return { id, name, process };
  });

  return lessonsList;
}
