import logo from './logo.svg';
import './App.css';

const data = [
  {
    id: '1',
    title: 'Tiramisu',
    description: 'The best tiramisu in town',
    image: 'https://picsum.photos/200/300/?random',
    price: '$5.00'
  },
  {
    id: '2',
    title: 'Lemon Ice Cream',
    description: 'Mind blowing taste',
    image: 'https://picsum.photos/200/300/?random',
    price: '$4.50'
  },
  {
    id: '3',
    title: 'Chocolate mousse',
    description: 'Unexplored flavour',
    image: 'https://picsum.photos/200/300/?random',
    price: '$6.00'
  }
];

const topDesserts = data.map(dessert => {
  return {
    content: `${dessert.title} - ${dessert.description}`,
    price: dessert.price,
  }
})

function App() {
  console.log(topDesserts);
  
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>
  })
  return (
    <div className="App">
      <h1>Examine console output</h1>
      {listItems}
    </div>
  );
}

export default App;
