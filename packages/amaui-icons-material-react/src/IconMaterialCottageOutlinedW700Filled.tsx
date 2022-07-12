import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCottageOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CottageOutlinedW700Filled'
      short_name='Cottage'

      {...props}
    >
      <path d="M3.325 21.375V12L1.725 13.25L0.075 11.025L3.325 8.5V5.075H6.1V6.375L11.975 1.925L23.9 11.025L22.225 13.2L20.625 12V21.375H13.275V14.625H10.5V21.375ZM3.325 4.075Q3.4 2.275 4.65 1.012Q5.9 -0.25 7.675 -0.25Q8.325 -0.25 8.775 -0.713Q9.225 -1.175 9.225 -1.825H12.025Q11.95 -0.025 10.7 1.237Q9.45 2.5 7.675 2.5Q7.025 2.5 6.575 2.962Q6.125 3.425 6.125 4.075Z"/>
    </Icon>
  )
});

export default IconMaterialCottageOutlinedW700Filled;