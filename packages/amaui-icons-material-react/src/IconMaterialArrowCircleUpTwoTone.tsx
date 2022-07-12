import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowCircleUpTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowCircleUpTwoTone'
      short_name='ArrowCircleUp'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M11,12l0,4h2l0-4h3l-4-4l-4,4H11z" opacity=".3"/><path d="M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"/></g>
    </Icon>
  )
});

export default IconMaterialArrowCircleUpTwoTone;