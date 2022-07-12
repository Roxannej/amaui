import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDonutSmallOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutSmallOutlinedW700Filled'
      short_name='DonutSmall'

      {...props}
    >
      <path d="M14.275 11.05Q14.075 10.625 13.75 10.3Q13.425 9.975 13 9.775V1.175Q16.95 1.55 19.712 4.325Q22.475 7.1 22.85 11.05ZM11 22.825Q6.8 22.425 3.988 19.35Q1.175 16.275 1.175 12.05Q1.175 7.825 3.988 4.712Q6.8 1.6 11 1.175V9.775Q10.325 10.05 9.913 10.675Q9.5 11.3 9.5 12.05Q9.5 12.8 9.9 13.438Q10.3 14.075 11 14.35ZM13 22.825V14.35Q13.425 14.15 13.775 13.825Q14.125 13.5 14.275 13.05H22.825Q22.45 16.975 19.688 19.712Q16.925 22.45 13 22.825Z"/>
    </Icon>
  )
});

export default IconMaterialDonutSmallOutlinedW700Filled;
