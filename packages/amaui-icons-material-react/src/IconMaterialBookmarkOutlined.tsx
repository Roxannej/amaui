import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkOutlined'
      short_name='Bookmark'

      {...props}
    >
      <path d="M7 17.95 12 15.8 17 17.95V5Q17 5 17 5Q17 5 17 5H7Q7 5 7 5Q7 5 7 5ZM5 21V5Q5 4.175 5.588 3.587Q6.175 3 7 3H17Q17.825 3 18.413 3.587Q19 4.175 19 5V21L12 18ZM17 5H12H7Q7 5 7 5Q7 5 7 5H17Q17 5 17 5Q17 5 17 5Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkOutlined;
