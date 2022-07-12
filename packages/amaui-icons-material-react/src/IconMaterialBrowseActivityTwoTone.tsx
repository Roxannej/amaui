import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrowseActivityTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrowseActivityTwoTone'
      short_name='BrowseActivity'

      {...props}
    >
      <path d="m12 15.15 1.475-3.125L16.6 10.55 13.475 9.1 12 5.95 10.55 9.1 7.4 10.55l3.15 1.475ZM4.425 18.7q-1.275 0-2.15-.875t-.875-2.15V5.45q0-1.275.875-2.15t2.15-.875h15.15q1.275 0 2.15.875t.875 2.15v10.225q0 1.275-.875 2.15t-2.15.875Zm-3.95 3.225v-2.25h23.05v2.25Z"/>
    </Icon>
  )
});

export default IconMaterialBrowseActivityTwoTone;