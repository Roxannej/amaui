import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeckOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeckOutlinedW700Filled'
      short_name='Deck'

      {...props}
    >
      <path d="M10.625 22.375V9H0.475L12 0.7L23.525 9H13.375V22.375ZM1.475 22.375V16.8L0.6 12.05L3.3 11.55L4.05 15.625H8.625V22.375H5.85V18.375H4.225V22.375ZM15.375 22.375V15.625H19.95L20.7 11.55L23.4 12.05L22.525 16.8V22.375H19.775V18.375H18.15V22.375Z"/>
    </Icon>
  )
});

export default IconMaterialDeckOutlinedW700Filled;