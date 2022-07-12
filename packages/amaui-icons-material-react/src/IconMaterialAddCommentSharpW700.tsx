import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentSharpW700'
      short_name='AddComment'

      {...props}
    >
      <path d="M10.8 14.2H13.2V11.2H16.2V8.8H13.2V5.8H10.8V8.8H7.8V11.2H10.8ZM1.15 22.85V1.15H22.85V18.85H5.15ZM4.3 15.975 4.575 15.7H19.7V4.3H4.3ZM4.3 15.975V4.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialAddCommentSharpW700;
