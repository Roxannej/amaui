import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressTwoTone'
      short_name='NestWakeOnPress'

      {...props}
    >
      <path d="M20.5 12.725q-.85 0-1.425-.588-.575-.587-.575-1.437v-6q0-.85.575-1.425Q19.65 2.7 20.5 2.7q.85 0 1.438.575.587.575.587 1.425v6q0 .85-.587 1.437-.588.588-1.438.588ZM7.625 21.5q-.45 0-.85-.163-.4-.162-.725-.512l-4.175-4.2q-.475-.475-.525-1.05-.05-.575.275-1 .3-.475.8-.587.5-.113 1.2.062l3.05.8V5.2q0-.8.55-1.338.55-.537 1.35-.537.825 0 1.35.537.525.538.525 1.338v5.25h.9q.3 0 .563.05.262.05.512.175l3.6 1.75q.75.375 1 1.087.25.713.125 1.538l-.75 4.625q-.125.825-.775 1.325t-1.475.5Z"/>
    </Icon>
  )
});

export default IconMaterialNestWakeOnPressTwoTone;
