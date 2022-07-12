import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchiveOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchiveOutlined'
      short_name='Archive'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V6.5Q3 6.125 3.125 5.825Q3.25 5.525 3.45 5.25L4.85 3.55Q5.05 3.275 5.35 3.137Q5.65 3 6 3H18Q18.35 3 18.65 3.137Q18.95 3.275 19.15 3.55L20.55 5.25Q20.75 5.525 20.875 5.825Q21 6.125 21 6.5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5.4 6H18.6L17.75 5H6.25ZM5 19H19Q19 19 19 19Q19 19 19 19V8H5V19Q5 19 5 19Q5 19 5 19ZM12 18 16 14 14.6 12.6 13 14.2V10H11V14.2L9.4 12.6L8 14ZM5 19Q5 19 5 19Q5 19 5 19V8V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  )
});

export default IconMaterialArchiveOutlined;
