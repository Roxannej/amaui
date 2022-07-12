import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDifferenceSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DifferenceSharpW700'
      short_name='Difference'

      {...props}
    >
      <path d="M13.35 11.375H15.35V9.375H17.35V7.375H15.35V5.375H13.35V7.375H11.35V9.375H13.35ZM11.35 14.225H17.35V12.225H11.35ZM6.2 18.625V0.225H16L22.5 6.725V18.625ZM9.35 15.475H19.35V8.375L14.35 3.375H9.35ZM1.05 23.775V6.925H4.2V20.625H15.425V23.775ZM9.35 15.475V3.375V8.375V15.475Z"/>
    </Icon>
  )
});

export default IconMaterialDifferenceSharpW700;
