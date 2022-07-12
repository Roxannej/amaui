import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadOutlined'
      short_name='DriveFolderUpload'

      {...props}
    >
      <path d="M11 17H13V12.8L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.8ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H10L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialDriveFolderUploadOutlined;