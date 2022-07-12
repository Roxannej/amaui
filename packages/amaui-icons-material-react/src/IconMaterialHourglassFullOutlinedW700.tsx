import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassFullOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFullOutlinedW700'
      short_name='HourglassFull'

      {...props}
    >
      <path d="M3.15 22.85V19.7H5.15V17Q5.15 15.575 5.725 14.262Q6.3 12.95 7.35 12Q6.3 11.05 5.725 9.737Q5.15 8.425 5.15 7V4.3H3.15V1.15H20.85V4.3H18.85V7Q18.85 8.425 18.288 9.737Q17.725 11.05 16.65 12Q17.725 12.95 18.288 14.262Q18.85 15.575 18.85 17V19.7H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialHourglassFullOutlinedW700;