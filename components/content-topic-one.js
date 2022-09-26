import styled from 'styled-components';

// export function Content({ ContentText })  {
//   return(
//     <StepsTag>
//       {ContentText}
//     </StepsTag>
//   )
// }

export function ContentTopicStepOne() {
  return (
    <>
      <StepsTag>
        Knien oder hocken Sie sich seitlich neben den Patienten. Nehmen Sie
        seinen zu Ihnen befindlichen Arm, winkeln diesen um 90 Grad an und legen
        den Arm ebenfalls in einem 90 Grad Winkel vom Körper gerade auf den
        Boden, sodass die Hand mit der innenfläche nach oben zeigend etwas
        überhalb seines Kopfes neben selbigem auf dem Boden liegt.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepTwo() {
  return (
    <>
      <StepsTag>
        Greifen Sie den anderen Arm am Handgelenk und ziehen diesen über den
        Körper des Patienten zu sich und legen seine Handinnenfläche auf die
        Ihnen zugewandte Wange. Den gerade bewegten Arm ab diesem Zeitpunkt
        nicht mehr loslassen.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepThree() {
  return (
    <>
      <StepsTag>
        Mit Ihrer anderen Hand das von Ihnen abgewante Knie beugen und in der
        Kniekehle festhalten. Den Patienten dann sanft zu sich ziehen, dass das
        Becken sich um 90 Grad zu Ihnen dreht und der Patient mit dem Kopf auf
        Hand liegend zu Ihnen gedreht ist.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepFour() {
  return (
    <>
      <StepsTag>
        Sicherstellen dass der Patient sicher liegt und zu keiner Seite kippen
        kann. Gegebenenfalls das der angewinkelte Oberschenkel ungefähr im
        rechten Winkel liegt. Final den Mund des Patienten öffnen, auf
        Fremdkörper überprüfen die die Atmung blockieren könnten. Nicht in den
        Mund fassen, lediglich mögliche Fremdkörper rausfallen lassen. Dann mit
        der unter dem Gesicht liegenden Hand durch Positionierung dieser den
        Kopf überstrecken um so die Atemwege des Patienten zu öffnen.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepFive() {
  return (
    <>
      <StepsTag>
        Bis zur Übergabe an medizinisches Fachpersonal den Patienten zu keinem
        Zeitpunkt alleine lassen und in kurzen Abständen immer wieder
        Bewusstseinslage, Atmung und Lebenszeichen kontrollieren.
      </StepsTag>
    </>
  );
}

const HeadLineTag = styled.h2`
  background-color: lightgray;
  color: white;
`;

const StepsTag = styled.p`
  margin-bottom: 2vh;
`;
