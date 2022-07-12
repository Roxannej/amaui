import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBoltOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BoltOutlinedW700'
      short_name='Bolt'

      {...props}
    >
      <path d="M9.825 21.85 10.9 14.2H7.05Q6.625 14.2 6.55 13.975Q6.475 13.75 6.7 13.375L13.1 2.15H14.175L13.1 9.8H16.95Q17.375 9.8 17.45 10.025Q17.525 10.25 17.3 10.625L10.9 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialBoltOutlinedW700;