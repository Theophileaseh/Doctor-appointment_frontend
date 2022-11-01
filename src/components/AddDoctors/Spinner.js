import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

function Spinner() {
  return (
    <div className="loader center">
      <i className="fa fa-cog fa-spin" />
      <FontAwesomeIcon icon={faCircleNotch} spin />
    </div>
  );
}

export default Spinner;
