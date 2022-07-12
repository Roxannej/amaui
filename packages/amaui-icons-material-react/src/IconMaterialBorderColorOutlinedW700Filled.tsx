import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorOutlinedW700Filled'
      short_name='BorderColor'

      {...props}
    >
      <path d="M2 24V19.225H22V24ZM3.625 17.225V12.95L12.925 3.625L17.225 7.925L7.9 17.225ZM18 7.125 13.725 2.825 15.7 0.85Q16.1 0.425 16.675 0.425Q17.25 0.425 17.65 0.85L20 3.2Q20.4 3.6 20.4 4.15Q20.4 4.7 20 5.125Z"/>
    </Icon>
  )
});

export default IconMaterialBorderColorOutlinedW700Filled;