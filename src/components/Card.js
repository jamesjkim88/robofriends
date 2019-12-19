import React from 'react';

// class Card extends React.Component {
//   render(){
//     return(
//       <div className="bg-light-green dib br3 ma3 grow bw2 shadow-5">
//         <img src={`https://robohash.org/${this.props.id}?200x200`} alt="Robots"/>
//         <div>
//           <h2>{ this.props.name }</h2>
//           <p>JaneDoe@gmail.com</p>
//         </div>
//       </div>
//     )
//   }
// };

const Card = ({ name, email, id }) => {
  return(
    <div className="bg-light-green dib br3 ma3 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robots"/>
      <div>
        <h2>{ name }</h2>
        <p>{ email }</p>
      </div>
    </div>
  )
}

export default Card;
