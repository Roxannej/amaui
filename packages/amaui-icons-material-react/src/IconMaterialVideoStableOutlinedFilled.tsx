import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoStableOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoStableOutlinedFilled'
      short_name='VideoStable'

      {...props}
    >
      <path d="M16.975 18 19.275 9.35 7.075 6 4.775 14.65ZM7.225 13.25 8.5 8.45ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  )
});

export default IconMaterialVideoStableOutlinedFilled;
