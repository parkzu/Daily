import React from 'react'
import PropTypes from 'prop-types';

function PropComponent(props) {
    return <div>{props.name}</div>
}

PropComponent.defaultProps = {
    name: "Jiyu",
    age: 7,
};

PropComponent.propTypes = {
    name: PropTypes.string,
    age: function(props, propName, componentName) {
        if (!/(7|8)/.test(props[propName])) {
          return new Error(
            'Invalid prop `' + 
            propName +  
            "(" + 
            props[propName] + 
            ")" +
            '` supplied to' +
            ' `' + 
            componentName + 
            '`. Validation failed.'
          );
        }
      },
}

export default function Component() {
  return (
    <div>
        <PropComponent />
    </div>
  )
}
