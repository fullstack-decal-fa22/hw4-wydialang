import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */



/* Create color buttons*/
const Menu = (props) => { 

    return (
      <div className="colorOptions">
        
          <Color color="red" handleClick={props.handleClick}></Color>
          <Color color="red" handleClick={props.handleClick}></Color>
          <Color color="red" handleClick={props.handleClick}></Color>
          <Color color="red" handleClick={props.handleClick}></Color>
      </div>
    );
}

export default Menu;