import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSimCardOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SimCardOutlined'
      short_name='SimCard'

      {...props}
    >
      <path d="M7 19H9V17H7ZM15 19H17V17H15ZM7 15H9V11H7ZM11 19H13V15H11ZM11 13H13V11H11ZM15 15H17V11H15ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V8L10 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H10.85L6 8.85V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20H10.85H18Q18 20 18 20Q18 20 18 20Q18 20 18 20Q18 20 18 20Z"/>
    </Icon>
  )
});

export default IconMaterialSimCardOutlined;
