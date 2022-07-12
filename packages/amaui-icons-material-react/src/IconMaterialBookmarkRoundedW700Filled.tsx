import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRoundedW700Filled'
      short_name='Bookmark'

      {...props}
    >
      <path d="M6.35 21.35Q5.55 21.7 4.85 21.225Q4.15 20.75 4.15 19.875V5.3Q4.15 3.975 5.062 3.062Q5.975 2.15 7.3 2.15H16.7Q18.025 2.15 18.938 3.062Q19.85 3.975 19.85 5.3V19.875Q19.85 20.75 19.15 21.225Q18.45 21.7 17.65 21.35L12 18.925Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarkRoundedW700Filled;