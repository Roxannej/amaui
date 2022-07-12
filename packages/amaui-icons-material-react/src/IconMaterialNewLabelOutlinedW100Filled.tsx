import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewLabelOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabelOutlinedW100Filled'
      short_name='NewLabel'

      {...props}
    >
      <path d="M5.65 19.35V16.35H2.65V15.65H5.65V12.65H6.35V15.65H9.35V16.35H6.35V19.35ZM12.35 17.7V12.65H9.35V9.65H4.45V7.8Q4.45 7.175 4.888 6.738Q5.325 6.3 5.95 6.3H14.35Q14.9 6.3 15.387 6.55Q15.875 6.8 16.2 7.25L19.55 12L16.2 16.7Q15.85 17.15 15.388 17.425Q14.925 17.7 14.35 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialNewLabelOutlinedW100Filled;
