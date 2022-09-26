import styled from 'styled-components';

export function ContentTopicStepOne() {
  return (
    <>
      <StepsTag>
        Prüfen Sie, ob die Person wirklich reanimationspflichtig ist. Merkmale
        sind keine Reaktion auf Ansprache und schütten. Keine ausreichende oder
        generell vorhandene Atmung. Keine Atembewegung im Brustkorb sowie kein
        tastbarer Puls. Prüfen Sie auch ob die Atemwege frei sind.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepTwo() {
  return (
    <>
      <StepsTag>
        Rufen Sie mit Ihrem Smartphone oder mit Hilfe einer dritten Person
        sofort den Notruf an und fordern Sie umstehende Personen zur
        Untersützung auf.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepThree() {
  return (
    <>
      <StepsTag>
        Knien Sie sich neben den Brustkorb des Patienten und machen Sie den
        Brustkorb frei. Legen Sie Ihre Hände übereinander mit den Handballen
        nach unten auf die Mitte der Brust (Sternum/ Solarplexus) des
        Betroffenen und strecken Sie Ihre Arme durch. Nun drücken Sie mit einer
        Frequenz von 100 bis 120 mal Pro Minute ca. 6cm tief. Wichtig ist, den
        gedrückten Weg auch wieder komplett zurück zu gehen. Druck- und
        Entlastungsdauer sollten gleich sein.
      </StepsTag>
    </>
  );
}

export function ContentTopicStepFour() {
  return (
    <>
      <StepsTag>
        Unterbrechen Sie die Massage möglichst nicht und wechseln Sie sich mit
        dritten Personen nach ein bis zwei Minuten ab um die Effizienz der
        Massage zu gewährleisten. Der Wechsel sollte so flüssig wie möglich
        durchgeführt werden. Der übernehmende Dritte kniet sich gegenüber an den
        Brustkorb des zu Reanimierenden und mit einem Kommando wird die
        Herzdruckmassage dann übernommen.
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
