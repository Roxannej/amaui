import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNewspaperOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewspaperOutlined'
      short_name='Newspaper'

      {...props}
    >
      <path d="M4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V3L3.675 4.675L5.325 3L7 4.675L8.675 3L10.325 4.675L12 3L13.675 4.675L15.325 3L17 4.675L18.675 3L20.325 4.675L22 3V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM4 19H11V13H4V19Q4 19 4 19Q4 19 4 19ZM13 19H20Q20 19 20 19Q20 19 20 19V17H13ZM13 15H20V13H13ZM4 11H20V8H4Z"/>
    </Icon>
  )
});

export default IconMaterialNewspaperOutlined;
