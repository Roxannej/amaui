import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedOutlined'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M17.825 9 15 6.175 16.4 4.75 17.825 6.175 21.35 2.625 22.775 4.05ZM5 21V5Q5 4.175 5.588 3.587Q6.175 3 7 3H13Q13 3.575 13 4Q13 4.425 13 5H7Q7 5 7 5Q7 5 7 5V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V21L12 18ZM7 5Q7 5 7 5Q7 5 7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkAddedOutlined;
