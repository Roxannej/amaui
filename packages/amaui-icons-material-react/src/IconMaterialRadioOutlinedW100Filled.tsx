import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioOutlinedW100Filled'
      short_name='Radio'

      {...props}
    >
      <path d="M5.35 7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7H4.8Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V8.8Q3.3 8.1 3.763 7.562Q4.225 7.025 4.875 6.75L14.6 2.8L14.85 3.45ZM4 11.7H16.65V9.9H17.35V11.7H20V8.8Q20 8.5 19.75 8.25Q19.5 8 19.2 8H4.8Q4.5 8 4.25 8.25Q4 8.5 4 8.8ZM7.8 18.2Q8.625 18.2 9.213 17.612Q9.8 17.025 9.8 16.2Q9.8 15.375 9.213 14.787Q8.625 14.2 7.8 14.2Q6.975 14.2 6.388 14.787Q5.8 15.375 5.8 16.2Q5.8 17.025 6.388 17.612Q6.975 18.2 7.8 18.2Z"/>
    </Icon>
  )
});

export default IconMaterialRadioOutlinedW100Filled;