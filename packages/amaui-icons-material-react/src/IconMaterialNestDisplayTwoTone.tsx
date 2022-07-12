import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestDisplayTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestDisplayTwoTone'
      short_name='NestDisplay'

      {...props}
    >
      <path d="M12 20.275Q8.45 20.275 6.975 19.875Q5.5 19.475 5.5 18.8V17.875H3.95Q2.625 17.875 1.725 16.925Q0.825 15.975 0.95 14.65L1.55 6.9Q1.625 5.7 2.5 4.9Q3.375 4.1 4.575 4.1H19.45Q20.625 4.1 21.5 4.9Q22.375 5.7 22.475 6.9L23.075 14.65Q23.175 15.975 22.275 16.925Q21.375 17.875 20.05 17.875H18.525V18.8Q18.525 19.475 17.05 19.875Q15.575 20.275 12 20.275ZM4 14.85H20.025Q20.025 14.85 20.025 14.85Q20.025 14.85 20.025 14.85L19.45 7.125Q19.45 7.125 19.45 7.125Q19.45 7.125 19.45 7.125H4.575Q4.575 7.125 4.575 7.125Q4.575 7.125 4.575 7.125L4 14.85Q4 14.85 4 14.85Q4 14.85 4 14.85Z"/>
    </Icon>
  )
});

export default IconMaterialNestDisplayTwoTone;
