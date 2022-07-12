import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTollRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollRoundedW700Filled'
      short_name='Toll'

      {...props}
    >
      <path d="M14.925 20.85Q11.25 20.85 8.662 18.262Q6.075 15.675 6.075 12Q6.075 8.325 8.662 5.737Q11.25 3.15 14.925 3.15Q18.6 3.15 21.188 5.737Q23.775 8.325 23.775 12Q23.775 15.675 21.188 18.262Q18.6 20.85 14.925 20.85ZM3.65 19.25Q2.075 18.125 1.15 16.188Q0.225 14.25 0.225 12Q0.225 9.75 1.163 7.812Q2.1 5.875 3.625 4.8Q4.475 4.15 5.275 4.575Q6.075 5 6.075 5.925Q6.075 6.225 5.912 6.6Q5.75 6.975 5.475 7.225Q4.425 8.1 3.9 9.35Q3.375 10.6 3.375 12Q3.375 13.4 3.9 14.65Q4.425 15.9 5.475 16.775Q5.75 17.025 5.912 17.387Q6.075 17.75 6.075 18.075Q6.075 19.025 5.3 19.462Q4.525 19.9 3.65 19.25Z"/>
    </Icon>
  )
});

export default IconMaterialTollRoundedW700Filled;