import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPausePresentationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PausePresentationOutlined'
      short_name='PausePresentation'

      {...props}
    >
      <path d="M9 16H11V8H9ZM13 16H15V8H13ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialPausePresentationOutlined;
