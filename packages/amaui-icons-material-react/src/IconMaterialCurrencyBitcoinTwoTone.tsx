import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinTwoTone'
      short_name='CurrencyBitcoin'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><path d="M17.06,11.57C17.65,10.88,18,9.98,18,9c0-1.86-1.27-3.43-3-3.87L15,3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2 c2.21,0,4-1.79,4-4C19,13.55,18.22,12.27,17.06,11.57z M10,7h4c1.1,0,2,0.9,2,2s-0.9,2-2,2h-4V7z M15,17h-5v-4h5c1.1,0,2,0.9,2,2 S16.1,17,15,17z"/></g>
    </Icon>
  );
});

export default IconMaterialCurrencyBitcoinTwoTone;