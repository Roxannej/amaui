import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartButtonOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartButtonOutlined'
      short_name='SmartButton'

      {...props}
    >
      <path d="M4 17Q3.175 17 2.588 16.413Q2 15.825 2 15V9Q2 8.175 2.588 7.587Q3.175 7 4 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V15Q22 15.825 21.413 16.413Q20.825 17 20 17H19V15H20Q20 15 20 15Q20 15 20 15V9Q20 9 20 9Q20 9 20 9H4Q4 9 4 9Q4 9 4 9V15Q4 15 4 15Q4 15 4 15H10V17ZM14.5 19 13.4 16.6 11 15.5 13.4 14.4 14.5 12 15.6 14.4 18 15.5 15.6 16.6ZM17 14 16.375 12.625 15 12 16.375 11.375 17 10 17.625 11.375 19 12 17.625 12.625Z"/>
    </Icon>
  )
});

export default IconMaterialSmartButtonOutlined;
