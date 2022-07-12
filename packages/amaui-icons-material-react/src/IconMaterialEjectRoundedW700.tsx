import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEjectRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EjectRoundedW700'
      short_name='Eject'

      {...props}
    >
      <path d="M5.425 20.15Q4.775 20.15 4.312 19.688Q3.85 19.225 3.85 18.575Q3.85 17.925 4.312 17.462Q4.775 17 5.425 17H18.575Q19.225 17 19.688 17.462Q20.15 17.925 20.15 18.575Q20.15 19.225 19.688 19.688Q19.225 20.15 18.575 20.15ZM6.725 15Q5.775 15 5.325 14.175Q4.875 13.35 5.4 12.55L10.7 4.6Q11.175 3.875 12 3.875Q12.825 3.875 13.3 4.6L18.6 12.55Q19.125 13.35 18.675 14.175Q18.225 15 17.275 15ZM12 11.85ZM9.625 11.85H14.375L12 8.3Z"/>
    </Icon>
  )
});

export default IconMaterialEjectRoundedW700;