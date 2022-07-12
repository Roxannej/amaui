import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormOutlinedFilled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M4 11Q3.175 11 2.588 10.412Q2 9.825 2 9V6Q2 5.175 2.588 4.588Q3.175 4 4 4H13V11ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V15Q2 14.175 2.588 13.587Q3.175 13 4 13H15V20ZM17 20V11H15V4H22L20 9H22ZM4.75 17.25H6.25V15.75H4.75ZM4.75 8.25H6.25V6.75H4.75Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFormOutlinedFilled;
