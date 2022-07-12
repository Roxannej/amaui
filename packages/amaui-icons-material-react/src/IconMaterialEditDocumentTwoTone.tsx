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
      <path d="M5.9 22.6q-1.275 0-2.15-.875t-.875-2.15V4.425q0-1.275.875-2.15T5.9 1.4h6.725q.6 0 1.163.225.562.225.987.675l4.475 4.45q.425.45.65 1 .225.55.225 1.15v1.475l-8.65 8.775v3.45Zm8.35 0q-.325 0-.55-.225-.225-.225-.225-.55v-1.45q0-.3.1-.55.1-.25.325-.475l4.85-4.875 2.825 2.825-4.85 4.85q-.225.2-.475.325-.25.125-.575.125Zm7.975-5.975L19.4 13.8l.8-.8q.45-.45 1.063-.45.612 0 1.062.45l.7.7q.475.45.475 1.062 0 .613-.475 1.063ZM13.8 9.25h3.3l-4.825-4.825v3.3q0 .625.45 1.075.45.45 1.075.45Z"/>
    </Icon>
  )
});

export default IconMaterialEditDocumentTwoTone;
