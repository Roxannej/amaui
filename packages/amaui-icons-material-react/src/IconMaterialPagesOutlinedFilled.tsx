import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPagesOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PagesOutlinedFilled'
      short_name='Pages'

      {...props}
    >
      <path d="M12 17 13.55 13.55 17 12 13.55 10.45 12 7 10.45 10.45 7 12 10.45 13.55ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  )
});

export default IconMaterialPagesOutlinedFilled;
