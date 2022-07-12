import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardOutlinedW100Filled'
      short_name='SimCard'

      {...props}
    >
      <path d="M7.65 18.5H8.35V17.25H7.65ZM15.65 18.5H16.35V17.25H15.65ZM7.65 14.75H8.35V11.5H7.65ZM11.65 18.5H12.35V15.25H11.65ZM11.65 12.75H12.35V11.5H11.65ZM15.65 14.75H16.35V11.5H15.65ZM6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V8.55L10.55 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  )
});

export default IconMaterialSimCardOutlinedW100Filled;
