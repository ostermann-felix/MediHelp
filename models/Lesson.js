import mongoose from 'mongoose';

const { Schema } = mongoose;

const lessonSchema = new Schema({
  name: { type: String, required: true },
  process: { type: Array, required: true },
});

const Lesson = mongoose.models.Lesson || mongoose.model('Lesson', lessonSchema);

export default Lesson;
