import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveOutlinedFilled'
      short_name='BookmarkRemove'

      {...props}
    >
      <path d="M21 7H15V5H21ZM5 21V5Q5 4.175 5.588 3.587Q6.175 3 7 3H14Q13.5 3.75 13.25 4.438Q13 5.125 13 6Q13 7.8 14.137 9.175Q15.275 10.55 17 10.9Q17.575 10.975 18 10.975Q18.425 10.975 19 10.9V21L12 18Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkRemoveOutlinedFilled;
