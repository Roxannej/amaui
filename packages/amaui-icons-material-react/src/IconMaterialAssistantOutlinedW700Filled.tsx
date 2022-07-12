import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistantOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantOutlinedW700Filled'
      short_name='Assistant'

      {...props}
    >
      <path d="M12 23.775 8.65 20.425H5.3Q3.975 20.425 3.062 19.513Q2.15 18.6 2.15 17.275V3.875Q2.15 2.55 3.062 1.637Q3.975 0.725 5.3 0.725H18.7Q20.025 0.725 20.938 1.637Q21.85 2.55 21.85 3.875V17.275Q21.85 18.6 20.938 19.513Q20.025 20.425 18.7 20.425H15.35ZM13.55 12.125 17 10.575 13.55 9.025 12 5.575 10.45 9.025 7 10.575 10.45 12.125 12 15.575Z"/>
    </Icon>
  )
});

export default IconMaterialAssistantOutlinedW700Filled;
