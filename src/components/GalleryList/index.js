import React from 'react';
import PropTypes from 'prop-types';
// Components
import NoResults from './NoResults';
import ListImage from './ListImage';

// Returns JSX to display in the Photo Container
const GalleryList = props => {
  const { data } = props;
  let list;
  
  if(data.length > 0) {
    
    list = data.map(pic => 
      <ListImage 
        farm={pic.farm} 
        server={pic.server} 
        secret={pic.secret}
        title={pic.title}
        id={pic.id} 
        key={pic.id} />
    );
  } else {
      list = <NoResults />
  }


  return (
    <div className="photo-container">
      <ul>
        { list }
      </ul>
    </div>
  )
}

GalleryList.propsTypes = {
  data: PropTypes.object.isRequired,
}

export default GalleryList
