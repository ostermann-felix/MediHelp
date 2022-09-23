import Headline from '../../components/content-topic-one';
import { ContentTopicStepOne } from '../../components/content-topic-one';
import { ContentTopicStepTwo } from '../../components/content-topic-one';
import Placeholderimg from '../../components/placeholderimg';

function content1() {
  return (
    <>
      <Headline />
      <ContentTopicStepOne />
      <Placeholderimg />
      <ContentTopicStepTwo />
      <Placeholderimg />
    </>
  );
}

export default content1;
