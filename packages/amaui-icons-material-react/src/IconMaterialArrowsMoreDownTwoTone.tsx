import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowsMoreDownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowsMoreDownTwoTone'
      short_name='ArrowsMoreDown'

      {...props}
    >
      <path d="M5 21V10h2v9h9v2Zm5-5V5h2v9h9v2Z"/>
    </Icon>
  )
});

export default IconMaterialArrowsMoreDownTwoTone;
