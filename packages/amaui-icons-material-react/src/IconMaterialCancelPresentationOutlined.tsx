import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCancelPresentationOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationOutlined'
      short_name='CancelPresentation'

      {...props}
    >
      <path d="M9.4 16 12 13.4 14.6 16 16 14.6 13.4 12 16 9.4 14.6 8 12 10.6 9.4 8 8 9.4 10.6 12 8 14.6ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialCancelPresentationOutlined;