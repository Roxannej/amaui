import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVillaRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VillaRoundedW700Filled'
      short_name='Villa'

      {...props}
    >
      <path d="M4.2 21.375Q3.55 21.375 3.088 20.913Q2.625 20.45 2.625 19.8V8.625Q2.625 8.125 2.9 7.737Q3.175 7.35 3.625 7.175L14.25 3.1Q15.025 2.8 15.7 3.275Q16.375 3.75 16.375 4.575V9.625H8.2Q7.55 9.625 7.088 10.087Q6.625 10.55 6.625 11.2V21.375ZM10.2 21.375Q9.55 21.375 9.088 20.913Q8.625 20.45 8.625 19.8V13.2Q8.625 12.55 9.088 12.087Q9.55 11.625 10.2 11.625H16.625Q16.625 10.65 17.325 9.938Q18.025 9.225 19 9.225Q19.975 9.225 20.675 9.938Q21.375 10.65 21.375 11.625V19.8Q21.375 20.45 20.913 20.913Q20.45 21.375 19.8 21.375H16.375V17Q16.375 16.425 15.975 16.025Q15.575 15.625 15 15.625Q14.425 15.625 14.025 16.025Q13.625 16.425 13.625 17V21.375Z"/>
    </Icon>
  )
});

export default IconMaterialVillaRoundedW700Filled;
