import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentOutlinedW100'
      short_name='AddComment'

      {...props}
    >
      <path d="M11.65 13.35H12.35V10.35H15.35V9.65H12.35V6.65H11.65V9.65H8.65V10.35H11.65ZM3.3 19.5V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1ZM4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8Z"/>
    </Icon>
  )
});

export default IconMaterialAddCommentOutlinedW100;
