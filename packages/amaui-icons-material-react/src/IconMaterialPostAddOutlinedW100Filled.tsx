import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPostAddOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PostAddOutlinedW100Filled'
      short_name='PostAdd'

      {...props}
    >
      <path d="M14.7 9.65V10.35H8V9.65ZM14.7 12.65V13.35H8V12.65ZM14.7 15.65V16.35H8V15.65ZM18.35 3V5H20.35V5.7H18.35V7.7H17.65V5.7H15.65V5H17.65V3ZM14.55 4.3V5H5.15Q4.85 5 4.6 5.25Q4.35 5.5 4.35 5.8V18.2Q4.35 18.5 4.6 18.75Q4.85 19 5.15 19H17.55Q17.85 19 18.1 18.75Q18.35 18.5 18.35 18.2V8.8H19.05V18.2Q19.05 18.85 18.625 19.275Q18.2 19.7 17.55 19.7H5.15Q4.5 19.7 4.075 19.275Q3.65 18.85 3.65 18.2V5.8Q3.65 5.15 4.075 4.725Q4.5 4.3 5.15 4.3Z"/>
    </Icon>
  )
});

export default IconMaterialPostAddOutlinedW100Filled;
