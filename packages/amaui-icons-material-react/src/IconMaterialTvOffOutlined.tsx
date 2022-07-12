import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTvOffOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffOutlined'
      short_name='TvOff'

      {...props}
    >
      <path d="M21.3 18.5 20 17.15Q20 17.1 20 17.075Q20 17.05 20 17V5Q20 5 20 5Q20 5 20 5H7.85L5.85 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V17Q22 17.45 21.825 17.825Q21.65 18.2 21.3 18.5ZM20.5 23.3 16.2 19H16V21H8V19H4Q3.175 19 2.588 18.413Q2 17.825 2 17V5Q2 4.95 2 4.9Q2 4.85 2 4.8L0.7 3.5L2.1 2.1L21.9 21.9ZM14.15 17 4 6.85Q4 6.85 4 6.85Q4 6.85 4 6.85V17Q4 17 4 17Q4 17 4 17ZM9.1 11.95Q9.1 11.95 9.1 11.95Q9.1 11.95 9.1 11.95Q9.1 11.95 9.1 11.95Q9.1 11.95 9.1 11.95ZM13.975 11.125Q13.975 11.125 13.975 11.125Q13.975 11.125 13.975 11.125Q13.975 11.125 13.975 11.125Q13.975 11.125 13.975 11.125Z"/>
    </Icon>
  )
});

export default IconMaterialTvOffOutlined;
