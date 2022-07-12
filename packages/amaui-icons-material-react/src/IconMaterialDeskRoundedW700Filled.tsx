import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeskRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeskRoundedW700Filled'
      short_name='Desk'

      {...props}
    >
      <path d="M1.25 17.125V6.825Q1.25 6.175 1.713 5.713Q2.175 5.25 2.825 5.25H21.2Q21.85 5.25 22.312 5.713Q22.775 6.175 22.775 6.825V17.125Q22.775 17.775 22.312 18.237Q21.85 18.7 21.2 18.7Q21 18.7 20.725 18.062Q20.45 17.425 20.213 16.863Q19.975 16.3 19.8 16.188Q19.625 16.075 19.625 17.125V17.2H16.4V17.125Q16.4 16.075 16.238 16.2Q16.075 16.325 15.825 16.875Q15.575 17.425 15.3 18.062Q15.025 18.7 14.825 18.7Q14.175 18.7 13.713 18.237Q13.25 17.775 13.25 17.125V8.4H4.4V17.125Q4.4 17.775 3.938 18.237Q3.475 18.7 2.825 18.7Q2.175 18.7 1.713 18.237Q1.25 17.775 1.25 17.125ZM16.4 9.9H19.625V8.4H16.4ZM16.4 14.3H19.625V12.8H16.4Z"/>
    </Icon>
  )
});

export default IconMaterialDeskRoundedW700Filled;