import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletSharp'
      short_name='AccountBalanceWallet'

      {...props}
    >
      <path d="M16 13.5Q16.65 13.5 17.075 13.075Q17.5 12.65 17.5 12Q17.5 11.35 17.075 10.925Q16.65 10.5 16 10.5Q15.35 10.5 14.925 10.925Q14.5 11.35 14.5 12Q14.5 12.65 14.925 13.075Q15.35 13.5 16 13.5ZM5 19V5ZM3 21V3H21V7.5H19V5H5V19H19V16.5H21V21ZM11 7H22V17H11Z"/>
    </Icon>
  )
});

export default IconMaterialAccountBalanceWalletSharp;
