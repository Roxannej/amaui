import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRttOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RttOutlinedW700Filled'
      short_name='Rtt'

      {...props}
    >
      <path d="M8.925 21.375 9.45 18.075H11.8L13.7 5.925H12.025L11.3 10.425H7.825L9.075 2.625H22.825L21.625 10.425H18.15L18.85 5.925H17.175L15.25 18.075H17.6L17.075 21.375ZM3.05 7.2 3.45 4.8H7.775L7.375 7.2ZM2.425 11.2 2.8 8.8H7.125L6.75 11.2ZM1.175 19.2 1.55 16.8H7.975L7.6 19.2ZM1.8 15.2 2.175 12.8H8.625L8.225 15.2Z"/>
    </Icon>
  )
});

export default IconMaterialRttOutlinedW700Filled;
