import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileDownloadOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileDownloadOutlinedFilled'
      short_name='FileDownload'

      {...props}
    >
      <path d="M12 16 7 11 8.4 9.55 11 12.15V4H13V12.15L15.6 9.55L17 11ZM6 20Q5.175 20 4.588 19.413Q4 18.825 4 18V15H6V18Q6 18 6 18Q6 18 6 18H18Q18 18 18 18Q18 18 18 18V15H20V18Q20 18.825 19.413 19.413Q18.825 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialFileDownloadOutlinedFilled;
