import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPublishOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishOutlinedW700'
      short_name='Publish'

      {...props}
    >
      <path d="M10.425 21.6V13.95L8.025 16.375L5.8 14.15L12 7.95L18.2 14.15L15.975 16.375L13.575 13.95V21.6ZM2.35 9.35V4.8Q2.35 3.475 3.263 2.562Q4.175 1.65 5.5 1.65H18.45Q19.775 1.65 20.688 2.562Q21.6 3.475 21.6 4.8V9.35H18.45V4.8Q18.45 4.8 18.45 4.8Q18.45 4.8 18.45 4.8H5.5Q5.5 4.8 5.5 4.8Q5.5 4.8 5.5 4.8V9.35Z"/>
    </Icon>
  )
});

export default IconMaterialPublishOutlinedW700;
