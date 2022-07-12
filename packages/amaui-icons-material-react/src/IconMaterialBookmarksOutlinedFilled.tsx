import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksOutlinedFilled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19 20V3Q19 3 19 3Q19 3 19 3H6V1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V20ZM3 23V7Q3 6.175 3.587 5.588Q4.175 5 5 5H15Q15.825 5 16.413 5.588Q17 6.175 17 7V23L10 20Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksOutlinedFilled;
