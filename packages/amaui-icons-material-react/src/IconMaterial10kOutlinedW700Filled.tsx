import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial10kOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='10kOutlinedW700Filled'
      short_name='10k'

      {...props}
    >
      <path d="M13.7 15H15.2V12.75L16.95 15H18.7L16.45 12L18.7 9H16.95L15.2 11.25V9H13.7ZM6.15 15H7.65V9H5.3V10.5H6.15ZM9.5 15H12Q12.425 15 12.713 14.712Q13 14.425 13 14V10Q13 9.575 12.713 9.287Q12.425 9 12 9H9.5Q9.075 9 8.788 9.287Q8.5 9.575 8.5 10V14Q8.5 14.425 8.788 14.712Q9.075 15 9.5 15ZM10 13.5V10.5H11.5V13.5ZM5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterial10kOutlinedW700Filled;
