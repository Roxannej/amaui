import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimer3SelectTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Timer3SelectTwoTone'
      short_name='Timer3Select'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M21,11v2h-4v1h2.5c0.83,0,1.5,0.68,1.5,1.5v2c0,0.83-0.67,1.5-1.5,1.5H15v-2h4v-1h-2.5c-0.82,0-1.5-0.68-1.5-1.5v-2 c0-0.82,0.68-1.5,1.5-1.5H21z M4,5v3h6v2.5H4v3h6V16H4v3h6c1.66,0,3-1.34,3-3v-1.9c0-1.16-0.94-2.1-2.1-2.1c1.16,0,2.1-0.94,2.1-2.1 V8c0-1.66-1.34-3-3-3H4z"/>
    </Icon>
  )
});

export default IconMaterialTimer3SelectTwoTone;