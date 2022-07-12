import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumOutlinedW100Filled'
      short_name='Forum'

      {...props}
    >
      <path d="M3.8 15.1V4Q3.8 3.7 4 3.5Q4.2 3.3 4.5 3.3H16.1Q16.4 3.3 16.6 3.5Q16.8 3.7 16.8 4V11.6Q16.8 11.9 16.6 12.1Q16.4 12.3 16.1 12.3H6.6ZM7.3 15.7Q7 15.7 6.8 15.5Q6.6 15.3 6.6 15V14.3H17.975L18.8 15.125V6H19.5Q19.8 6 20 6.2Q20.2 6.4 20.2 6.7V18.5L17.4 15.7Z"/>
    </Icon>
  )
});

export default IconMaterialForumOutlinedW100Filled;