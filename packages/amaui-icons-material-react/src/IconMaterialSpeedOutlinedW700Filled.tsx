import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeedOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeedOutlinedW700Filled'
      short_name='Speed'

      {...props}
    >
      <path d="M10.45 15.5Q11.075 16.125 12 16.087Q12.925 16.05 13.4 15.4L19.65 6.35L10.6 12.6Q9.95 13.1 9.9 14Q9.85 14.9 10.45 15.5ZM5.1 20.85Q4.35 20.85 3.663 20.5Q2.975 20.15 2.625 19.475Q1.9 18.2 1.525 16.825Q1.15 15.45 1.15 14Q1.15 11.75 2 9.775Q2.85 7.8 4.325 6.325Q5.8 4.85 7.775 4Q9.75 3.15 12 3.15Q14.225 3.15 16.2 3.987Q18.175 4.825 19.65 6.275Q21.125 7.725 21.988 9.675Q22.85 11.625 22.85 13.85Q22.85 15.35 22.488 16.775Q22.125 18.2 21.375 19.475Q20.975 20.125 20.325 20.488Q19.675 20.85 18.9 20.85Z"/>
    </Icon>
  )
});

export default IconMaterialSpeedOutlinedW700Filled;
