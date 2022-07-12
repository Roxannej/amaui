import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGavelRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GavelRoundedW700Filled'
      short_name='Gavel'

      {...props}
    >
      <path d="M3.975 22.525Q3.475 22.525 3.138 22.188Q2.8 21.85 2.8 21.35Q2.8 20.85 3.15 20.5Q3.5 20.15 4 20.15H14.8Q15.3 20.15 15.625 20.5Q15.95 20.85 15.95 21.35Q15.95 21.85 15.613 22.188Q15.275 22.525 14.775 22.525ZM6.875 15.45 4.875 13.425Q3.95 12.5 3.938 11.212Q3.925 9.925 4.85 9L5.575 8.275L12.075 14.725L11.35 15.45Q10.425 16.375 9.113 16.375Q7.8 16.375 6.875 15.45ZM16.525 10.25 10.075 3.75 10.8 3.025Q11.725 2.1 13.025 2.112Q14.325 2.125 15.25 3.05L17.25 5.075Q18.175 6 18.175 7.3Q18.175 8.6 17.25 9.525ZM19.5 19.9 6.75 7.15 8.95 4.925 21.725 17.725Q22.175 18.175 22.163 18.812Q22.15 19.45 21.7 19.9Q21.25 20.35 20.6 20.35Q19.95 20.35 19.5 19.9Z"/>
    </Icon>
  )
});

export default IconMaterialGavelRoundedW700Filled;