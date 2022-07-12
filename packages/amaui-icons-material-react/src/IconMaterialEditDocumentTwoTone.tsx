import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditDocumentTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditDocumentTwoTone'
      short_name='EditDocument'

      {...props}
    >
      <path d="M5.9 22.6q-1.275 0-2.15-.875t-.875-2.15V4.425q0-1.275.875-2.15T5.9 1.4h7.975l6.25 6.25v2.725l-8.65 8.775v3.45Zm7.575 0v-2.825l5.275-5.3 2.8 2.825-5.25 5.3Zm8.75-5.975L19.4 13.8l.8-.8q.45-.45 1.063-.45.612 0 1.062.45l.7.7q.475.45.475 1.062 0 .613-.475 1.063Zm-9.95-7.375H17.1l-4.825-4.825Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentTwoTone;