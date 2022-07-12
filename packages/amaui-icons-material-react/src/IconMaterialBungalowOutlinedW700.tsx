import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBungalowOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowOutlinedW700'
      short_name='Bungalow'

      {...props}
    >
      <path d="M6.425 21.375V15.675L5.625 16.875L3.275 15.4L12 2.05L20.725 15.4L18.375 16.875L17.575 15.675V21.375ZM9.2 18.625H10.625V15.725H13.375V18.625H14.8V11.425L12 7.125L9.2 11.425ZM10.625 14.275V11.525H13.375V14.275ZM9.2 18.625H10.625H13.375H14.8H12H9.2Z"/>
    </Icon>
  )
});

export default IconMaterialBungalowOutlinedW700;
