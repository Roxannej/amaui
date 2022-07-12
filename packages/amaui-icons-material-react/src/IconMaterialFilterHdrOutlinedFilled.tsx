import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterHdrOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterHdrOutlinedFilled'
      short_name='FilterHdr'

      {...props}
    >
      <path d="M1 18 7 10 11.5 16H19L14 9.35L11.5 12.65L10.25 11L14 6L23 18ZM11.5 12.65 14 9.35 19 16H14.025ZM5 16H9L7 13.325ZM5 16 7 13.325 9 16Z"/>
    </Icon>
  )
});

export default IconMaterialFilterHdrOutlinedFilled;
