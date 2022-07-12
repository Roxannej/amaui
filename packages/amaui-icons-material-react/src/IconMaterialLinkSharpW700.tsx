import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkSharpW700'
      short_name='Link'

      {...props}
    >
      <path d="M10.625 17.85H7Q4.575 17.85 2.863 16.137Q1.15 14.425 1.15 12Q1.15 9.575 2.863 7.862Q4.575 6.15 7 6.15H10.625V9.3H7Q5.875 9.3 5.088 10.087Q4.3 10.875 4.3 12Q4.3 13.125 5.088 13.912Q5.875 14.7 7 14.7H10.625ZM7.425 13.2V10.8H16.575V13.2ZM13.375 17.85V14.7H17Q18.125 14.7 18.913 13.912Q19.7 13.125 19.7 12Q19.7 10.875 18.913 10.087Q18.125 9.3 17 9.3H13.375V6.15H17Q19.425 6.15 21.138 7.862Q22.85 9.575 22.85 12Q22.85 14.425 21.138 16.137Q19.425 17.85 17 17.85Z"/>
    </Icon>
  )
});

export default IconMaterialLinkSharpW700;
