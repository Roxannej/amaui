import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShowChartRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShowChartRoundedW700'
      short_name='ShowChart'

      {...props}
    >
      <path d="M2.3 18.15Q1.825 17.675 1.825 17Q1.825 16.325 2.3 15.85L8.35 9.8Q8.8 9.35 9.45 9.35Q10.1 9.35 10.55 9.8L13.425 12.65L19.425 5.9Q19.85 5.4 20.525 5.375Q21.2 5.35 21.7 5.825Q22.15 6.25 22.175 6.875Q22.2 7.5 21.775 7.975L14.6 16.075Q14.15 16.575 13.475 16.612Q12.8 16.65 12.3 16.15L9.45 13.3L4.6 18.15Q4.125 18.625 3.45 18.625Q2.775 18.625 2.3 18.15Z"/>
    </Icon>
  )
});

export default IconMaterialShowChartRoundedW700;