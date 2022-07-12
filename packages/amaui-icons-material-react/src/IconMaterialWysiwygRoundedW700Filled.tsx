import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWysiwygRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WysiwygRoundedW700Filled'
      short_name='Wysiwyg'

      {...props}
    >
      <path d="M5.375 21.775Q4.075 21.775 3.15 20.85Q2.225 19.925 2.225 18.625V5.375Q2.225 4.075 3.15 3.15Q4.075 2.225 5.375 2.225H18.625Q19.925 2.225 20.85 3.15Q21.775 4.075 21.775 5.375V18.625Q21.775 19.925 20.85 20.85Q19.925 21.775 18.625 21.775ZM5 19H19Q19 19 19 19Q19 19 19 19V7H5V19Q5 19 5 19Q5 19 5 19ZM8 12Q7.575 12 7.287 11.712Q7 11.425 7 11Q7 10.575 7.287 10.287Q7.575 10 8 10H16Q16.425 10 16.712 10.287Q17 10.575 17 11Q17 11.425 16.712 11.712Q16.425 12 16 12ZM8 16Q7.575 16 7.287 15.712Q7 15.425 7 15Q7 14.575 7.287 14.287Q7.575 14 8 14H12Q12.425 14 12.713 14.287Q13 14.575 13 15Q13 15.425 12.713 15.712Q12.425 16 12 16Z"/>
    </Icon>
  )
});

export default IconMaterialWysiwygRoundedW700Filled;
