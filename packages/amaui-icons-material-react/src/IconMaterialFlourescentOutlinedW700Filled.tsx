import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlourescentOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlourescentOutlinedW700Filled'
      short_name='Flourescent'

      {...props}
    >
      <path d="M4.15 15.9V8.2H19.85V15.9ZM10.625 4.225V0.475H13.375V4.225ZM19.85 7.175 17.925 5.25 20.25 2.925 22.175 4.85ZM10.625 23.525V19.775H13.375V23.525ZM20.25 21.175 17.925 18.85 19.85 16.925 22.175 19.25ZM4.15 7.175 1.825 4.85 3.75 2.925 6.075 5.25ZM3.75 21.175 1.825 19.25 4.15 16.925 6.075 18.85Z"/>
    </Icon>
  )
});

export default IconMaterialFlourescentOutlinedW700Filled;