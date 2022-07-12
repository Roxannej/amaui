import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStraightenOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StraightenOutlinedW100Filled'
      short_name='Straighten'

      {...props}
    >
      <path d="M4.8 16.7Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H7.65V11H8.35V7.3H11.65V11H12.35V7.3H15.65V11H16.35V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialStraightenOutlinedW100Filled;
