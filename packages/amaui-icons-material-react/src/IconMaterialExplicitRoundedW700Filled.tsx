import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExplicitRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplicitRoundedW700Filled'
      short_name='Explicit'

      {...props}
    >
      <path d="M10.375 17.2H14Q14.5 17.2 14.85 16.85Q15.2 16.5 15.2 16Q15.2 15.5 14.85 15.15Q14.5 14.8 14 14.8H11.2V13.2H14Q14.5 13.2 14.85 12.85Q15.2 12.5 15.2 12Q15.2 11.5 14.85 11.15Q14.5 10.8 14 10.8H11.2V9.2H14Q14.5 9.2 14.85 8.85Q15.2 8.5 15.2 8Q15.2 7.5 14.85 7.15Q14.5 6.8 14 6.8H10.375Q9.725 6.8 9.263 7.262Q8.8 7.725 8.8 8.375V15.625Q8.8 16.275 9.263 16.737Q9.725 17.2 10.375 17.2ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialExplicitRoundedW700Filled;
