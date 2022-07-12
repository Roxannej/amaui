import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaleTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaleTwoTone'
      short_name='Male'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M9.5,11c1.93,0,3.5,1.57,3.5,3.5S11.43,18,9.5,18S6,16.43,6,14.5S7.57,11,9.5,11z M9.5,9C6.46,9,4,11.46,4,14.5 S6.46,20,9.5,20s5.5-2.46,5.5-5.5c0-1.16-0.36-2.23-0.97-3.12L18,7.42V10h2V4h-6v2h2.58l-3.97,3.97C11.73,9.36,10.66,9,9.5,9z"/>
    </Icon>
  )
});

export default IconMaterialMaleTwoTone;