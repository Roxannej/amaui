import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFormOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFormOutlinedW700Filled'
      short_name='DynamicForm'

      {...props}
    >
      <path d="M4.2 11Q2.9 11 1.975 10.075Q1.05 9.15 1.05 7.85V6Q1.05 4.7 1.975 3.775Q2.9 2.85 4.2 2.85H12.8V11ZM4.2 21.15Q2.9 21.15 1.975 20.225Q1.05 19.3 1.05 18V16.15Q1.05 14.85 1.975 13.925Q2.9 13 4.2 13H14.8V21.15ZM16.8 21.15V11H14.8V2.85H22.85L20.85 9.2H22.9ZM4.375 17.825H5.875V16.325H4.375ZM4.375 7.675H5.875V6.175H4.375Z"/>
    </Icon>
  )
});

export default IconMaterialDynamicFormOutlinedW700Filled;
