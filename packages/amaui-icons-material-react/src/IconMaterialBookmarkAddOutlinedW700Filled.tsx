import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddOutlinedW700Filled'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M4.15 22.275V5.3Q4.15 3.975 5.062 3.062Q5.975 2.15 7.3 2.15H14.1Q13.55 2.925 13.213 3.762Q12.875 4.6 12.875 5.55Q12.875 7.375 13.963 8.787Q15.05 10.2 16.7 10.7Q17.5 10.925 18.238 10.925Q18.975 10.925 19.85 10.7V22.275L12 18.925ZM16.875 8.95V6.95H14.875V4.175H16.875V2.175H19.65V4.175H21.65V6.95H19.65V8.95Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkAddOutlinedW700Filled;