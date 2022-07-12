import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWorkspacesOutlineTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacesOutlineTwoTone'
      short_name='WorkspacesOutline'

      {...props}
    >
      <path d="M5.725 21.65Q3.75 21.65 2.375 20.275Q1 18.9 1 16.925Q1 14.95 2.375 13.587Q3.75 12.225 5.725 12.225Q7.7 12.225 9.05 13.587Q10.4 14.95 10.4 16.925Q10.4 18.9 9.05 20.275Q7.7 21.65 5.725 21.65ZM12 11.025Q10.025 11.025 8.65 9.65Q7.275 8.275 7.275 6.3Q7.275 4.3 8.65 2.95Q10.025 1.6 12 1.6Q14 1.6 15.363 2.95Q16.725 4.3 16.725 6.3Q16.725 8.275 15.363 9.65Q14 11.025 12 11.025ZM18.3 21.65Q16.325 21.65 14.963 20.275Q13.6 18.9 13.6 16.925Q13.6 14.95 14.963 13.587Q16.325 12.225 18.3 12.225Q20.275 12.225 21.638 13.587Q23 14.95 23 16.925Q23 18.9 21.638 20.275Q20.275 21.65 18.3 21.65Z"/>
    </Icon>
  )
});

export default IconMaterialWorkspacesOutlineTwoTone;