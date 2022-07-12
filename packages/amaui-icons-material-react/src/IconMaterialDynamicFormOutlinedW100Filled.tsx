import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormOutlinedW100Filled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M4.15 11Q3.525 11 3.088 10.562Q2.65 10.125 2.65 9.5V6.15Q2.65 5.525 3.088 5.087Q3.525 4.65 4.15 4.65H13V11ZM4.15 19.35Q3.525 19.35 3.088 18.913Q2.65 18.475 2.65 17.85V14.5Q2.65 13.875 3.088 13.438Q3.525 13 4.15 13H15V19.35ZM17 19.35V11H15V4.65H21.05L19.05 9.8H21ZM5.075 16.925H6.575V15.425H5.075ZM5.075 8.575H6.575V7.075H5.075Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFormOutlinedW100Filled;
