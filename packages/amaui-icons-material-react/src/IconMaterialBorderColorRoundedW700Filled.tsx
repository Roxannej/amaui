import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderColorRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderColorRoundedW700Filled'
      short_name='BorderColor'

      {...props}
    >
      <path d="M4.375 24Q3.4 24 2.7 23.3Q2 22.6 2 21.625Q2 20.65 2.7 19.938Q3.4 19.225 4.375 19.225H19.625Q20.6 19.225 21.3 19.938Q22 20.65 22 21.625Q22 22.6 21.3 23.3Q20.6 24 19.625 24ZM5.2 17.225Q4.55 17.225 4.088 16.763Q3.625 16.3 3.625 15.65V13.6Q3.625 13.275 3.737 13Q3.85 12.725 4.1 12.475L12.925 3.625L17.225 7.925L8.375 16.75Q8.125 17 7.85 17.113Q7.575 17.225 7.25 17.225ZM18 7.125 13.725 2.825 15.7 0.85Q16.1 0.425 16.675 0.425Q17.25 0.425 17.65 0.85L20 3.2Q20.4 3.6 20.4 4.15Q20.4 4.7 20 5.125Z"/>
    </Icon>
  )
});

export default IconMaterialBorderColorRoundedW700Filled;
