import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditRoundedW700'
      short_name='Edit'

      {...props}
    >
      <path d="M5.225 19.025H6.225L14.6 10.625L13.6 9.625L5.225 18.025ZM19.4 9.2 15.025 4.85 16.275 3.575Q16.95 2.9 17.913 2.875Q18.875 2.85 19.65 3.575L20.7 4.6Q21.475 5.325 21.425 6.275Q21.375 7.225 20.7 7.9ZM4.4 21.4Q3.75 21.4 3.288 20.938Q2.825 20.475 2.825 19.825V17.675Q2.825 17.35 2.95 17.062Q3.075 16.775 3.3 16.55L13.575 6.275L17.975 10.65L7.7 20.925Q7.475 21.15 7.175 21.275Q6.875 21.4 6.55 21.4ZM14.125 10.125 13.6 9.625 14.6 10.625Z"/>
    </Icon>
  )
});

export default IconMaterialEditRoundedW700;
