import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSegmentOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SegmentOutlinedFilled'
      short_name='Segment'

      {...props}
    >
      <path d="M9 18V16H21V18ZM3 8V6H21V8ZM9 13V11H21V13Z"/>
    </Icon>
  )
});

export default IconMaterialSegmentOutlinedFilled;
