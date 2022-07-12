import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterAltRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterAltRoundedW700'
      short_name='FilterAlt'

      {...props}
    >
      <path d="M14.85 13.3V19.275Q14.85 19.95 14.4 20.4Q13.95 20.85 13.275 20.85H11Q10.25 20.85 9.7 20.3Q9.15 19.75 9.15 19V13.3L3.55 6.1Q2.825 5.175 3.325 4.162Q3.825 3.15 5 3.15H19Q20.175 3.15 20.675 4.162Q21.175 5.175 20.45 6.1ZM12 11.8 16.3 6.3H7.7ZM12 11.8Z"/>
    </Icon>
  )
});

export default IconMaterialFilterAltRoundedW700;