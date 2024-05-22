import react from 'react';

function Display(props) {
    return (
        <div className="cards">
          <dt>
            <span className="travel" role="img" aria-label="india">
              <img className="immg" src={props.url} alt="travel" />
            </span>
            <span className='name'><h1>{props.name}</h1></span>
            <div className="pl"></div>
            <span className='place'>{props.place}</span>
          </dt>
        </div>
    )
}

export default Display;