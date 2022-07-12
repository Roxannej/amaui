import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendToMobileOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileOutlinedW100Filled'
      short_name='SendToMobile'

      {...props}
    >
      <path d="M17 15.1 16.5 14.6 18.75 12.35H12.65V11.65H18.75L16.5 9.4L17 8.9L20.1 12ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V6.9H17V5.35H7V18.65H17V17.1H17.7V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7Z"/>
    </Icon>
  )
});

export default IconMaterialSendToMobileOutlinedW100Filled;