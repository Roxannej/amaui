import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampingSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingSharpW700'
      short_name='Camping'

      {...props}
    >
      <path d="M1.675 22.575v-5.2l8.35-11.25L8.175 3.6 10.7 1.725l1.3 1.75 1.275-1.725 2.55 1.85-1.85 2.525 8.35 11.25v5.2ZM12 8.75l-7.175 9.675v1H6.7L12 12l5.3 7.425h1.875v-1Zm-1.425 10.675h2.85l-1.425-2ZM12 12l5.3 7.425L12 12l-5.3 7.425Z"/>
    </Icon>
  )
});

export default IconMaterialCampingSharpW700;
