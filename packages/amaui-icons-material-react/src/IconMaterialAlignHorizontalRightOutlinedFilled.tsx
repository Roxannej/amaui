import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightOutlinedFilled'
      short_name='AlignHorizontalRight'

      {...props}
    >
      <path d="M20 22V2H22V22ZM2 10V7H18V10ZM8 17V14H18V17Z"/>
    </Icon>
  )
});

export default IconMaterialAlignHorizontalRightOutlinedFilled;