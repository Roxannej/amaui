import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFastRewindRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FastRewindRoundedW700Filled'
      short_name='FastRewind'

      {...props}
    >
      <path d="M21.175 17.95 14.225 13.3Q13.5 12.825 13.5 12Q13.5 11.175 14.225 10.7L21.175 6.05Q21.975 5.525 22.8 5.975Q23.625 6.425 23.625 7.375V16.625Q23.625 17.575 22.8 18.025Q21.975 18.475 21.175 17.95ZM9.35 17.95 2.4 13.3Q1.675 12.825 1.675 12Q1.675 11.175 2.4 10.7L9.35 6.05Q10.15 5.525 10.975 5.975Q11.8 6.425 11.8 7.375V16.625Q11.8 17.575 10.975 18.025Q10.15 18.475 9.35 17.95Z"/>
    </Icon>
  )
});

export default IconMaterialFastRewindRoundedW700Filled;
