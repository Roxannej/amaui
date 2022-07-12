import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksOutlinedW100'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M18.35 18.05V5.1Q18.35 4.8 18.1 4.55Q17.85 4.3 17.55 4.3H7.95V3.6H17.55Q18.2 3.6 18.625 4.025Q19.05 4.45 19.05 5.1V18.05ZM5.65 19.95 10.65 17.8 15.65 19.95V7.8Q15.65 7.5 15.4 7.25Q15.15 7 14.85 7H6.45Q6.15 7 5.9 7.25Q5.65 7.5 5.65 7.8ZM4.95 21.05V7.8Q4.95 7.15 5.375 6.725Q5.8 6.3 6.45 6.3H14.85Q15.5 6.3 15.925 6.725Q16.35 7.15 16.35 7.8V21.05L10.65 18.6ZM5.65 7Q5.65 7 5.9 7Q6.15 7 6.45 7H14.85Q15.15 7 15.4 7Q15.65 7 15.65 7H10.65Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksOutlinedW100;