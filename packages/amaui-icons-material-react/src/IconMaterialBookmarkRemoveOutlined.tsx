import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveOutlined'
      short_name='BookmarkRemove'

      {...props}
    >
      <path d="M5 21V5Q5 4.175 5.588 3.587Q6.175 3 7 3H13Q13 3.575 13 4Q13 4.425 13 5H7Q7 5 7 5Q7 5 7 5V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V21L12 18ZM7 5Q7 5 7 5Q7 5 7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12ZM21 7H15V5H21Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkRemoveOutlined;
