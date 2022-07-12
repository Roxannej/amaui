import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmOutlined'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M11 17H13V16H14Q14.425 16 14.713 15.712Q15 15.425 15 15V12Q15 11.575 14.713 11.287Q14.425 11 14 11H11V10H15V8H13V7H11V8H10Q9.575 8 9.288 8.287Q9 8.575 9 9V12Q9 12.425 9.288 12.712Q9.575 13 10 13H13V14H9V16H11ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialLocalAtmOutlined;
