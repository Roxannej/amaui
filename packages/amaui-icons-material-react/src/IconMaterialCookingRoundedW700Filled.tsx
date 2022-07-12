import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCookingRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CookingRoundedW700Filled'
      short_name='Cooking'

      {...props}
    >
      <path d="M8.225 22.925V19.45H.475V16.7H7.85q1.3 0 2.225.925T11 19.85v3.075Zm4.775 0V19.85q0-1.3.925-2.225t2.225-.925h7.375v2.75h-7.75v3.475ZM5.075 15.7q-1.525 0-2.6-1.088Q1.4 13.525 1.4 12V7.15h21.2V12q0 1.525-1.075 2.612-1.075 1.088-2.6 1.088ZM1.4 6.15V3.4h6.9v-.75q0-.65.462-1.113.463-.462 1.113-.462h4.25q.65 0 1.113.462Q15.7 2 15.7 2.65v.75h6.9v2.75Z"/>
    </Icon>
  )
});

export default IconMaterialCookingRoundedW700Filled;