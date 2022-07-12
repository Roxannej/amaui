import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCabinSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CabinSharpW700Filled'
      short_name='Cabin'

      {...props}
    >
      <path d="M6.1 18.625H17.875V17.375H6.1ZM6.1 14.625H17.875V13.375H6.1ZM6.1 10.625H17.875V9.925L17.075 9.375H6.75L6.1 9.9ZM10.35 6.625H13.45L11.9 5.4ZM3.325 21.375V12.025L1.725 13.275L0.075 11.025L3.325 8.525V5.1H6.1V6.4L11.975 1.95L23.9 11.025L22.225 13.225L20.625 12.025V21.375ZM3.325 4.1Q3.4 2.3 4.65 1.037Q5.9 -0.225 7.675 -0.225Q8.325 -0.225 8.775 -0.688Q9.225 -1.15 9.225 -1.8H12.025Q11.95 0 10.7 1.262Q9.45 2.525 7.675 2.525Q7.025 2.525 6.575 2.987Q6.125 3.45 6.125 4.1Z"/>
    </Icon>
  )
});

export default IconMaterialCabinSharpW700Filled;
