import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleLeftTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleLeftTwoTone'
      short_name='ArrowCircleLeft'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M20,12c0,4.41-3.59,8-8,8s-8-3.59-8-8s3.59-8,8-8S20,7.59,20,12 M12,13l4,0v-2l-4,0V8l-4,4l4,4V13z" opacity=".3"/><path d="M20,12c0,4.41-3.59,8-8,8s-8-3.59-8-8s3.59-8,8-8S20,7.59,20,12 M22,12c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10C17.52,22,22,17.52,22,12L22,12z M12,13l4,0v-2l-4,0V8l-4,4l4,4V13z"/></g></g>
    </Icon>
  )
});

export default IconMaterialArrowCircleLeftTwoTone;
