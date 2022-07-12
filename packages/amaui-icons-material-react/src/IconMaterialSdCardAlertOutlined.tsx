import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardAlertOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertOutlined'
      short_name='SdCardAlert'

      {...props}
    >
      <path d="M11 13H13V8H11ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8L10 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H10.85L6 8.85V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20H10.85H18Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialSdCardAlertOutlined;
