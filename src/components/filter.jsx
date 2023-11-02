import React from 'react';
import New from "./New";
import Popular from "./Popular"

export default function filter(Component) {
  return (props) => {
    if (props.views<100)
    {
        return (<New><Component  {...props} /></New>);
    }
    if (props.views>=1000)
    {
        return (<Popular><Component  {...props} /></Popular>);
    }
    return <Component {...props} />
  }
}
