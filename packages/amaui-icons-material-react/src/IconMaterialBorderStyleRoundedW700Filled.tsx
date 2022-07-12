import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleRoundedW700Filled'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M14.625 21.375V18.625H17.375V21.375ZM18.625 21.375V18.625H21.375V21.375ZM6.625 21.375V18.625H9.375V21.375ZM10.625 21.375V18.625H13.375V21.375ZM18.625 17.375V14.625H21.375V17.375ZM18.625 13.375V10.625H21.375V13.375ZM2.625 21.375V5.775Q2.625 4.475 3.55 3.55Q4.475 2.625 5.775 2.625H21.375V5.375H5.775Q5.5 5.375 5.438 5.438Q5.375 5.5 5.375 5.775V21.375ZM18.625 9.375V6.625H21.375V9.375Z"/>
    </Icon>
  )
});

export default IconMaterialBorderStyleRoundedW700Filled;
