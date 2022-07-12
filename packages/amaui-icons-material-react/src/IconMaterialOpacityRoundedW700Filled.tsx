import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpacityRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpacityRoundedW700Filled'
      short_name='Opacity'

      {...props}
    >
      <path d="M12 21.85Q8.35 21.85 5.75 19.312Q3.15 16.775 3.15 13.15Q3.15 11.325 3.838 9.725Q4.525 8.125 5.775 6.925L10.9 1.9Q11.15 1.675 11.425 1.562Q11.7 1.45 12 1.45Q12.3 1.45 12.575 1.562Q12.85 1.675 13.1 1.9L18.225 6.925Q19.475 8.125 20.163 9.725Q20.85 11.325 20.85 13.15Q20.85 16.775 18.25 19.312Q15.65 21.85 12 21.85ZM6.35 14H17.625Q17.775 12.35 17.35 11.212Q16.925 10.075 16.25 9.425L12 5.225L7.75 9.425Q7.075 10.075 6.638 11.212Q6.2 12.35 6.35 14Z"/>
    </Icon>
  )
});

export default IconMaterialOpacityRoundedW700Filled;