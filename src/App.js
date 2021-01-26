import React from 'react';
import PropTypes from 'prop-types';

function Food({props}){
  return (
    <div>
      <h3>This food is "{props.name}" and this cost {props.cost}.</h3>
      <h2>This is rating on {props.rating}</h2>
    </div>
  );  // 이 코드는 HTML이 아니라 JSX 이다!
}

const foodarr = [
  {
    id : 1,
    name : 'kimchi',
    cost : '30$',
    rating : 3,
  },
  {
    id : 2,
    name : 'bread',
    cost : '5$',
    rating : 2,
  },
  {
    id : 3,
    name : '떡볶이',
    cost : '4$',
    rating : 1,
  },
];

Food.propTypes = {
  name : PropTypes.string.isRequired,
  cost : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodarr.map(dish => <Food key = {dish.id} props = {dish}/>)}
    </div>
  );
}

export default App;