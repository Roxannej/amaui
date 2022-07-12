import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodRoundedW700Filled'
      short_name='Aod'

      {...props}
    >
      <path d="M9.125 11.5Q8.8 11.5 8.588 11.287Q8.375 11.075 8.375 10.75Q8.375 10.425 8.588 10.212Q8.8 10 9.125 10H14.875Q15.2 10 15.413 10.212Q15.625 10.425 15.625 10.75Q15.625 11.075 15.413 11.287Q15.2 11.5 14.875 11.5ZM10.125 14.5Q9.8 14.5 9.588 14.287Q9.375 14.075 9.375 13.75Q9.375 13.425 9.588 13.212Q9.8 13 10.125 13H13.875Q14.2 13 14.413 13.212Q14.625 13.425 14.625 13.75Q14.625 14.075 14.413 14.287Q14.2 14.5 13.875 14.5ZM7.375 23.775Q6.075 23.775 5.15 22.85Q4.225 21.925 4.225 20.625V3.375Q4.225 2.075 5.15 1.15Q6.075 0.225 7.375 0.225H16.625Q17.925 0.225 18.85 1.15Q19.775 2.075 19.775 3.375V20.625Q19.775 21.925 18.85 22.85Q17.925 23.775 16.625 23.775ZM7.375 17.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialAodRoundedW700Filled;
