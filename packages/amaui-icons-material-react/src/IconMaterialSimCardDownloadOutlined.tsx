import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardDownloadOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardDownloadOutlined'
      short_name='SimCardDownload'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8L10 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H10.85L6 8.85V20Q6 20 6 20Q6 20 6 20ZM12 17 16 13 14.6 11.6 13 13.15V9H11V13.15L9.4 11.6L8 13ZM6 20Q6 20 6 20Q6 20 6 20H10.85H18Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialSimCardDownloadOutlined;
