import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatQuoteOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatQuoteOutlined'
      short_name='FormatQuote'

      {...props}
    >
      <path d="M15 11H18V8H15ZM6 11H9V8H6ZM15 17 17 13H13V6H20V13L18 17ZM6 17 8 13H4V6H11V13L9 17ZM7.5 9.5ZM16.5 9.5Z"/>
    </Icon>
  )
});

export default IconMaterialFormatQuoteOutlined;
