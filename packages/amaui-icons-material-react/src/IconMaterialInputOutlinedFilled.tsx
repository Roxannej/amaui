import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInputOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputOutlinedFilled'
      short_name='Input'

      {...props}
    >
      <path d="M2 13V11H12.175L10.1 8.95L11.5 7.5L16 12L11.5 16.5L10.1 15.05L12.175 13ZM4 15V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V9H2V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V15Z"/>
    </Icon>
  )
});

export default IconMaterialInputOutlinedFilled;
