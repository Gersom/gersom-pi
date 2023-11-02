import Card from './Card';

const Cards = ({cards= []}) => {

  const listItems = cards.map((card) => 
    <Card
      key={card.id}
      identification={card.id}
      image={card.image}
      name={card.name}
      temperament={card.temperament}
      weight={card.weight}
    />
  );

  return (
    <div className='c-cards'>
      {listItems}
    </div>
  );
}

export default Cards