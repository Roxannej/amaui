import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareOutlinedW100'
      short_name='Compare'

      {...props}
    >
      <path d="M11.3 22V19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H11.3V2H12V22ZM5 18H11.3V10.45ZM14 19.7V12L19 18V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H14V4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  )
});

export default IconMaterialCompareOutlinedW100;
