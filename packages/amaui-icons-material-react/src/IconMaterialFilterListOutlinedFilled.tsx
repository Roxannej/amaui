import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilterListOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterListOutlinedFilled'
      short_name='FilterList'

      {...props}
    >
      <path d="M10 18V16H14V18ZM3 8V6H21V8ZM6 13V11H18V13Z"/>
    </Icon>
  )
});

export default IconMaterialFilterListOutlinedFilled;
