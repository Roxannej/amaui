import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFontDownloadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FontDownloadOutlined'
      short_name='FontDownload'

      {...props}
    >
      <path d="M6.4 18H8.5L9.6 14.95H14.4L15.5 18H17.6L13.05 6H10.95ZM10.2 13.2 11.95 8.25H12.05L13.8 13.2ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 20H20Q20 20 20 20Q20 20 20 20V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20ZM4 4Q4 4 4 4Q4 4 4 4V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V4Q4 4 4 4Q4 4 4 4Z"/>
    </Icon>
  )
});

export default IconMaterialFontDownloadOutlined;
