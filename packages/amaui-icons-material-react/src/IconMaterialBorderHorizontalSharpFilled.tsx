import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderHorizontalSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalSharpFilled'
      short_name='BorderHorizontal'

      {...props}
    >
      <path d="M3 5V3H5V5ZM7 5V3H9V5ZM11 5V3H13V5ZM15 5V3H17V5ZM19 5V3H21V5ZM3 9V7H5V9ZM11 9V7H13V9ZM19 9V7H21V9ZM3 13V11H21V13ZM3 17V15H5V17ZM11 17V15H13V17ZM19 17V15H21V17ZM3 21V19H5V21ZM7 21V19H9V21ZM11 21V19H13V21ZM15 21V19H17V21ZM19 21V19H21V21Z"/>
    </Icon>
  )
});

export default IconMaterialBorderHorizontalSharpFilled;
