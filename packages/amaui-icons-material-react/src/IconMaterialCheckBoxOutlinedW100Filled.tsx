import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlinedW100Filled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM10.6 15.3 16.8 9.1 16.3 8.6 10.6 14.3 7.75 11.45 7.25 11.95Z"/>
    </Icon>
  )
});

export default IconMaterialCheckBoxOutlinedW100Filled;
