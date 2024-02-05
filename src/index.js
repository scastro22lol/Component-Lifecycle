import React from 'react';
import { render } from 'react-dom';

class List extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.items !== nextProps.items) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("List's render function");
    const list = this.props.items.map(item => <li key={item}>{item}</li>);

    return <ul>{list}</ul>;
  }
}

const list1Items = ['Eggs', 'Bread', 'Artisan cheese'];
const list2Items = ['Trains', 'Planes', 'Automobiles'];

const renderItems = items => {
  render(<List items={items} />, document.getElementById('root'));
};

document.addEventListener('keydown', event => {
  
  if (event.code === 'Digit1') {
    renderItems(list1Items);
  }
  
  else if (event.code === 'Digit2') {
    renderItems(list2Items);
  }
});

renderItems(list1Items);