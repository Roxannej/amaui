import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayDisabledOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayDisabledOutlinedW700'
      short_name='PlayDisabled'

      {...props}
    >
      <path d="M17.4 14.025 15.125 11.725 14.9 11.525 7.15 3.775V3.475L20.575 12ZM19.9 23.25 13.3 16.65 7.15 20.525V10.5L0.75 4.075L2.425 2.425L21.575 21.575ZM10 13.325ZM10 15.35 11.2 14.575 10 13.325ZM14.9 11.525Z"/>
    </Icon>
  )
});

export default IconMaterialPlayDisabledOutlinedW700;
