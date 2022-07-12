import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadOutlined'
      short_name='Upload'

      {...props}
    >
      <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V15H6V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V15H20V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialUploadOutlined;
