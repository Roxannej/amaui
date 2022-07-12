import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAtrTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AtrTwoTone'
      short_name='Atr'

      {...props}
    >
      <path d="M4.925 22.875Q2.875 22.875 1.413 21.413Q-0.05 19.95 -0.05 17.9Q-0.05 15.85 1.413 14.375Q2.875 12.9 4.925 12.9Q6.975 12.9 8.45 14.375Q9.925 15.85 9.925 17.9Q9.925 19.95 8.45 21.413Q6.975 22.875 4.925 22.875ZM12 11.1Q9.95 11.1 8.475 9.625Q7 8.15 7 6.1Q7 4.05 8.475 2.587Q9.95 1.125 12 1.125Q14.05 1.125 15.525 2.587Q17 4.05 17 6.1Q17 8.15 15.525 9.625Q14.05 11.1 12 11.1ZM19.075 22.875Q17.025 22.875 15.55 21.413Q14.075 19.95 14.075 17.9Q14.075 15.85 15.55 14.375Q17.025 12.9 19.075 12.9Q21.125 12.9 22.587 14.375Q24.05 15.85 24.05 17.9Q24.05 19.95 22.587 21.413Q21.125 22.875 19.075 22.875Z"/>
    </Icon>
  )
});

export default IconMaterialAtrTwoTone;
