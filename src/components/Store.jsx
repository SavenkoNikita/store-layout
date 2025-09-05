import { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends Component {
  constructor() {
    super();
    this.state = {
      view: 'module'
    };
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
  }

  onSwitch = () => {
    this.setState(prevState => ({
      view: prevState.view === 'module' ? 'list' : 'module'
    }));
  }

  render() {
    const iconName = this.state.view === 'module' ? 'view_list' : 'view_module';
    
    return (
      <div className="container">
        <IconSwitch icon={iconName} onSwitch={this.onSwitch} />
        {this.state.view === 'module' ? 
          <CardsView cards={this.products} /> : 
          <ListView items={this.products} />
        }
      </div>
    );
  }
}

export default Store;