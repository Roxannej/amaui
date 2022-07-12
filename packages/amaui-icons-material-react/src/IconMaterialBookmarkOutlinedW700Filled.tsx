import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkOutlinedW700Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M4.15 22.275V5.3Q4.15 3.975 5.062 3.062Q5.975 2.15 7.3 2.15H16.7Q18.025 2.15 18.938 3.062Q19.85 3.975 19.85 5.3V22.275L12 18.925Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkOutlinedW700Filled;