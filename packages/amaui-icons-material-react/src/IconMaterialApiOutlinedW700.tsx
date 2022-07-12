import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialApiOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ApiOutlinedW700'
      short_name='Api'

      {...props}
    >
      <path d="M12 14.8 9.2 12 12 9.2 14.8 12ZM9.875 7.5 6.85 4.475 12 -0.675 17.15 4.475 14.125 7.5 12 5.375ZM4.475 17.15 -0.675 12 4.475 6.85 7.5 9.875 5.375 12 7.5 14.125ZM19.525 17.15 16.5 14.125 18.625 12 16.5 9.875 19.525 6.85 24.675 12ZM12 24.675 6.85 19.525 9.875 16.5 12 18.625 14.125 16.5 17.15 19.525Z"/>
    </Icon>
  )
});

export default IconMaterialApiOutlinedW700;
