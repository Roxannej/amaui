import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial3pOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='3pOutlinedW700Filled'
      short_name='3p'

      {...props}
    >
      <path d="M7.625 14.35H16.375V13.6Q16.375 12.425 15.163 11.688Q13.95 10.95 12 10.95Q10.05 10.95 8.838 11.688Q7.625 12.425 7.625 13.6ZM12 9.95Q12.925 9.95 13.562 9.325Q14.2 8.7 14.2 7.775Q14.2 6.85 13.562 6.212Q12.925 5.575 12 5.575Q11.075 5.575 10.438 6.212Q9.8 6.85 9.8 7.775Q9.8 8.7 10.438 9.325Q11.075 9.95 12 9.95ZM1.15 22.85V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15Z"/>
    </Icon>
  )
});

export default IconMaterial3pOutlinedW700Filled;