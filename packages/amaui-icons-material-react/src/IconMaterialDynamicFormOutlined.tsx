import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormOutlined'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M4 11Q3.175 11 2.588 10.412Q2 9.825 2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H13V11ZM4 9H11V6H4Q4 6 4 6Q4 6 4 6V9Q4 9 4 9Q4 9 4 9ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15Q2 14.175 2.588 13.587Q3.175 13 4 13H15V20ZM4 18H13V15H4Q4 15 4 15Q4 15 4 15V18Q4 18 4 18Q4 18 4 18ZM17 20V11H15V4H22L20 9H22ZM4.75 17.25H6.25V15.75H4.75ZM4.75 8.25H6.25V6.75H4.75ZM4 9Q4 9 4 9Q4 9 4 9V6Q4 6 4 6Q4 6 4 6V9ZM4 18Q4 18 4 18Q4 18 4 18V15Q4 15 4 15Q4 15 4 15V18Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFormOutlined;
