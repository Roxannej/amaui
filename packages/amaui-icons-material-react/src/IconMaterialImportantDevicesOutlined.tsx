import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialImportantDevicesOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesOutlined'
      short_name='ImportantDevices'

      {...props}
    >
      <path d="M17 21Q16.575 21 16.288 20.712Q16 20.425 16 20V12Q16 11.575 16.288 11.287Q16.575 11 17 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12V20Q22 20.425 21.712 20.712Q21.425 21 21 21ZM17 19H21V13H17ZM8 21V19H10V17H4Q3.175 17 2.588 16.413Q2 15.825 2 15V5Q2 4.175 2.588 3.587Q3.175 3 4 3H18Q18.825 3 19.413 3.587Q20 4.175 20 5V9H18V5Q18 5 18 5Q18 5 18 5H4Q4 5 4 5Q4 5 4 5V15Q4 15 4 15Q4 15 4 15H14V17H12V19H14V21ZM8.7 13.75 11 12 13.3 13.75 12.45 10.9 14.75 9.05H11.9L11 6.25L10.1 9.05H7.25L9.55 10.9ZM11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Z"/>
    </Icon>
  )
});

export default IconMaterialImportantDevicesOutlined;
