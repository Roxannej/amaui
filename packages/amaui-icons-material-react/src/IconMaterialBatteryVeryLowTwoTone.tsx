import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryVeryLowTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryVeryLowTwoTone'
      short_name='BatteryVeryLow'

      {...props}
    >
      <path d="M1.5 14.5V9.475H3.5V8.325Q3.5 7.575 4.037 7.025Q4.575 6.475 5.35 6.475H20.675Q21.425 6.475 21.975 7.025Q22.525 7.575 22.525 8.325V15.625Q22.525 16.425 21.975 16.962Q21.425 17.5 20.65 17.5H5.35Q4.575 17.5 4.037 16.962Q3.5 16.425 3.5 15.65V14.5ZM18.5 14.475V9.5H6.525Q6.525 9.5 6.525 9.5Q6.525 9.5 6.525 9.5V14.475Q6.525 14.475 6.525 14.475Q6.525 14.475 6.525 14.475Z"/>
    </Icon>
  )
});

export default IconMaterialBatteryVeryLowTwoTone;