import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonOutlinedW100Filled'
      short_name='SmartButton'

      {...props}
    >
      <path d="M4.15 16.35Q3.525 16.35 3.088 15.913Q2.65 15.475 2.65 14.85V9.15Q2.65 8.525 3.088 8.087Q3.525 7.65 4.15 7.65H19.85Q20.475 7.65 20.913 8.087Q21.35 8.525 21.35 9.15V14.85Q21.35 15.475 20.913 15.913Q20.475 16.35 19.85 16.35H19.15V15.65H19.85Q20.2 15.65 20.425 15.425Q20.65 15.2 20.65 14.85V9.15Q20.65 8.8 20.425 8.575Q20.2 8.35 19.85 8.35H4.15Q3.8 8.35 3.575 8.575Q3.35 8.8 3.35 9.15V14.85Q3.35 15.2 3.575 15.425Q3.8 15.65 4.15 15.65H9.85V16.35ZM14.5 18.15 13.675 16.325 11.85 15.5 13.675 14.675 14.5 12.85 15.325 14.675 17.15 15.5 15.325 16.325ZM17 14 16.375 12.625 15 12 16.375 11.375 17 10 17.625 11.375 19 12 17.625 12.625Z"/>
    </Icon>
  )
});

export default IconMaterialSmartButtonOutlinedW100Filled;