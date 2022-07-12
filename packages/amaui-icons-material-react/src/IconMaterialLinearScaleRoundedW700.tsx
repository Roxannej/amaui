import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinearScaleRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinearScaleRoundedW700'
      short_name='LinearScale'

      {...props}
    >
      <path d="M17 17.85Q15.075 17.85 13.562 16.738Q12.05 15.625 11.45 13.85H7.3Q6.825 14.575 6.1 14.962Q5.375 15.35 4.5 15.35Q3.1 15.35 2.125 14.375Q1.15 13.4 1.15 12Q1.15 10.6 2.125 9.625Q3.1 8.65 4.5 8.65Q5.375 8.65 6.1 9.037Q6.825 9.425 7.3 10.15H11.45Q12.05 8.375 13.562 7.262Q15.075 6.15 17 6.15Q19.425 6.15 21.138 7.862Q22.85 9.575 22.85 12Q22.85 14.425 21.138 16.137Q19.425 17.85 17 17.85ZM17 14.7Q18.125 14.7 18.913 13.912Q19.7 13.125 19.7 12Q19.7 10.875 18.913 10.087Q18.125 9.3 17 9.3Q15.875 9.3 15.088 10.087Q14.3 10.875 14.3 12Q14.3 13.125 15.088 13.912Q15.875 14.7 17 14.7Z"/>
    </Icon>
  )
});

export default IconMaterialLinearScaleRoundedW700;