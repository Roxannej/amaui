import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAmpStoriesOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AmpStoriesOutlinedFilled'
      short_name='AmpStories'

      {...props}
    >
      <path d="M7 20V4H17V20ZM3 18V6H5V18ZM19 18V6H21V18Z"/>
    </Icon>
  )
});

export default IconMaterialAmpStoriesOutlinedFilled;
