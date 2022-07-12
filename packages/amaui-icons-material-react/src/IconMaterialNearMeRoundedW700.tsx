import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeRoundedW700'
      short_name='NearMe'

      {...props}
    >
      <path d="M8.95 14.6 2.875 12.15Q2.325 11.925 2.013 11.438Q1.7 10.95 1.7 10.375Q1.7 9.8 2.025 9.337Q2.35 8.875 2.875 8.675L19 2.5Q19.475 2.3 19.925 2.437Q20.375 2.575 20.675 2.875Q20.975 3.175 21.1 3.612Q21.225 4.05 21.025 4.525L14.875 20.65Q14.65 21.25 14.175 21.55Q13.7 21.85 13.15 21.85Q12.6 21.85 12.113 21.55Q11.625 21.25 11.375 20.675ZM13.1 16.5 16.825 6.7 7.05 10.45 11.4 12.125ZM11.4 12.125Z"/>
    </Icon>
  )
});

export default IconMaterialNearMeRoundedW700;