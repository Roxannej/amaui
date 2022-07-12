import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOutlinedW100Filled'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 21.15 9.55 18.7H5.8Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V4.8Q4.3 4.15 4.725 3.725Q5.15 3.3 5.8 3.3H18.2Q18.85 3.3 19.275 3.725Q19.7 4.15 19.7 4.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7H14.45ZM13.075 12.075 15.4 11 13.075 9.925 12 7.6 10.925 9.925 8.6 11 10.925 12.075 12 14.4Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantOutlinedW100Filled;
