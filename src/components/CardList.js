import React from 'react';
import Card from '../components//Card';

// class CardList extends React.Component {
//   render(){
//     return(
//       <div>
//         <Card name={this.props.robots[0].name} id={this.props.robots[0].id} />
//         <Card name={this.props.robots[1].name} id={this.props.robots[1].id} />
//         <Card name={this.props.robots[2].name} id={this.props.robots[2].id} />
//       </div>
//     )
//   }
// };

const CardList = ({ robots }) => {
  const cardComp = robots.map((user, i) => {
    return <Card
      name={robots[i].name}
      id={robots[i].id}
      email={robots[i].email}
      key={i}
      />
  });
  return(
    <div>
      { cardComp }
    </div>
  )
}

export default CardList;
