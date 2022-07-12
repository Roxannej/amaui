import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowRightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowRightSharp'
      short_name='SubdirectoryArrowRight'

      {...props}
    >
      <path d="M14 21 12.6 19.575 16.175 16H5V4H7V14H16.175L12.575 10.4L14 8.975L20 15Z"/>
    </Icon>
  )
});

export default IconMaterialSubdirectoryArrowRightSharp;
