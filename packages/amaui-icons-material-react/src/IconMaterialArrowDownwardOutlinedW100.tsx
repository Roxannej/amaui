import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardOutlinedW100'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 19 5 12 5.5 11.5 11.65 17.65V5H12.35V17.65L18.5 11.5L19 12Z"/>
    </Icon>
  )
});

export default IconMaterialArrowDownwardOutlinedW100;