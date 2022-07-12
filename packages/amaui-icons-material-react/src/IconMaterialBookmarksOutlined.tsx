import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksOutlined'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19 20V3Q19 3 19 3Q19 3 19 3H6V1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V20ZM5 19.95 10 17.8 15 19.95V7Q15 7 15 7Q15 7 15 7H5Q5 7 5 7Q5 7 5 7ZM3 23V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.825 5 16.413 5.588Q17 6.175 17 7V23L10 20ZM5 7Q5 7 5 7Q5 7 5 7H15Q15 7 15 7Q15 7 15 7H10Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksOutlined;
