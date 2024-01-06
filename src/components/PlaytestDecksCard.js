import React, { useContext } from 'react';

import CubeContext from 'contexts/CubeContext';
import DeckPreview from 'components/DeckPreview';

import PropTypes from 'prop-types';
import DeckPropType from 'proptypes/DeckPropType';

import { Card, CardHeader, CardTitle, CardBody, CardFooter } from 'reactstrap';

function PlaytestDecksCard({ decks, ...props }) {
  const { cube } = useContext(CubeContext);
  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Recent Decks
        </CardTitle>
      </CardHeader>
      <CardBody className="p-0">
        {decks.map((deck) => (
          <DeckPreview key={deck.id} deck={deck} />
        ))}
      </CardBody>
      <CardFooter>
        <a href={`/cube/deck/decks/${cube.id}`}>View all</a>
      </CardFooter>
    </Card>
  );
}

PlaytestDecksCard.propTypes = {
  decks: PropTypes.arrayOf(DeckPropType).isRequired,
};

export default PlaytestDecksCard;
