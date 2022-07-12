import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltRoundedW700Filled'
      short_name='Bolt'

      {...props}
    >
      <path d="M10.5 21.85Q10.225 21.85 10.05 21.65Q9.875 21.45 9.925 21.175L10.9 14.2H7.05Q6.625 14.2 6.55 13.975Q6.475 13.75 6.7 13.375L12.9 2.5Q12.975 2.35 13.15 2.25Q13.325 2.15 13.5 2.15Q13.775 2.15 13.95 2.35Q14.125 2.55 14.075 2.825L13.1 9.8H16.95Q17.375 9.8 17.45 10.025Q17.525 10.25 17.3 10.625L11.1 21.5Q11.025 21.65 10.85 21.75Q10.675 21.85 10.5 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBoltRoundedW700Filled;
