import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterHdrOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrOutlinedW700Filled'
      short_name='FilterHdr'

      {...props}
    >
      <path d="M0.225 18.375 7 9.35 11.425 15.225H17.475L14 10.625L12.225 13L10.25 10.35L14 5.35L23.775 18.375ZM12.225 13 14 10.625 17.475 15.225H13.9ZM6 15.225H8L7 13.875ZM6 15.225 7 13.875 8 15.225Z"/>
    </Icon>
  )
});

export default IconMaterialFilterHdrOutlinedW700Filled;
