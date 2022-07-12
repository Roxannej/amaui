import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrokenImageOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageOutlinedW100Filled'
      short_name='BrokenImage'

      {...props}
    >
      <path d="M6 13.5 4.3 11.8V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V11.2L18 9.5L14 13.5L10 9.5ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V12.8L6 14.5L10 10.5L14 14.5L18 10.5L19.7 12.2V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialBrokenImageOutlinedW100Filled;