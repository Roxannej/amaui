import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStairsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsOutlinedW100Filled'
      short_name='Stairs'

      {...props}
    >
      <path d="M6.65 17.35H9.775V14.025H12.35V10.7H14.925V7.35H17.35V6.65H14.225V9.975H11.65V13.3H9.075V16.65H6.65ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialStairsOutlinedW100Filled;
