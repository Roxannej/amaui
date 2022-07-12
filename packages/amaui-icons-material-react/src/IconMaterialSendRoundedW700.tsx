import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRoundedW700'
      short_name='Send'

      {...props}
    >
      <path d="M2.225 18.425V5.575Q2.225 4.725 2.938 4.25Q3.65 3.775 4.425 4.125L19.575 10.55Q20.525 10.975 20.525 12Q20.525 13.025 19.575 13.45L4.425 19.875Q3.65 20.225 2.938 19.75Q2.225 19.275 2.225 18.425ZM5 16.625 15.925 12 5 7.375V10.125L11.375 12L5 13.875ZM5 12V7.375V10.125Q5 10.125 5 10.125Q5 10.125 5 10.125V13.875Q5 13.875 5 13.875Q5 13.875 5 13.875V16.625Z"/>
    </Icon>
  )
});

export default IconMaterialSendRoundedW700;