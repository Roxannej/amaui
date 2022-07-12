import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestLocatorTagTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestLocatorTagTwoTone'
      short_name='NestLocatorTag'

      {...props}
    >
      <path d="M12 22.775q-3.25 0-5.512-2.263Q4.225 18.25 4.225 15q0-2.7 1.538-4.65Q7.3 8.4 9.5 7.65V2.975q0-.6.438-1.05.437-.45 1.062-.45h2.025q.6 0 1.05.45.45.45.45 1.05V7.65q2.2.75 3.738 2.7Q19.8 12.3 19.8 15q0 3.25-2.275 5.512Q15.25 22.775 12 22.775Zm0-3.025q1.975 0 3.375-1.387 1.4-1.388 1.4-3.363t-1.4-3.375q-1.4-1.4-3.375-1.4t-3.363 1.4Q7.25 13.025 7.25 15t1.387 3.363Q10.025 19.75 12 19.75Z"/>
    </Icon>
  )
});

export default IconMaterialNestLocatorTagTwoTone;
