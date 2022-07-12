import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToysFanTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToysFanTwoTone'
      short_name='ToysFan'

      {...props}
    >
      <path d="M12 12q0-2.425 1.725-4.15 1.725-1.725 4.15-1.725 2.425 0 4.15 1.725Q23.75 9.575 23.75 12Zm-5.875 5.875q-2.425 0-4.15-1.725Q.25 14.425.25 12H12q0 2.425-1.725 4.15-1.725 1.725-4.15 1.725ZM12 12q-2.425 0-4.15-1.725-1.725-1.725-1.725-4.15 0-2.425 1.725-4.15Q9.575.25 12 .25Zm0 11.75V12q2.425 0 4.15 1.725 1.725 1.725 1.725 4.15 0 2.425-1.725 4.15Q14.425 23.75 12 23.75Z"/>
    </Icon>
  )
});

export default IconMaterialToysFanTwoTone;