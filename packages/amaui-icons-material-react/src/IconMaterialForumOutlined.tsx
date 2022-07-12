import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialForumOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForumOutlined'
      short_name='Forum'

      {...props}
    >
      <path d="M2 17V3Q2 2.575 2.288 2.287Q2.575 2 3 2H16Q16.425 2 16.712 2.287Q17 2.575 17 3V12Q17 12.425 16.712 12.712Q16.425 13 16 13H6ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17V15H19V6H21Q21.425 6 21.712 6.287Q22 6.575 22 7V22L18 18ZM15 4H4V12.175L5.175 11H15ZM4 4V11V12.175Z"/>
    </Icon>
  )
});

export default IconMaterialForumOutlined;
