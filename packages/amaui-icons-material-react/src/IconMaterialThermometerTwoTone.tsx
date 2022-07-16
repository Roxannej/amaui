import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerTwoTone'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 21q-2.075 0-3.537-1.462Q7 18.075 7 16q0-1.2.525-2.238Q8.05 12.725 9 12V6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6v6q.95.725 1.475 1.762Q17 14.8 17 16q0 2.075-1.462 3.538Q14.075 21 12 21Zm0-2q1.2 0 2.1-.9.9-.9.9-2.1 0-.725-.312-1.35-.313-.625-.888-1.05L13 13V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v7l-.8.6q-.575.425-.888 1.05Q9 15.275 9 16q0 1.2.9 2.1.9.9 2.1.9Z"/>
    </Icon>
  );
});

export default IconMaterialThermometerTwoTone;