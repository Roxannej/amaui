import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronOutlinedW700Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M1.125 18.775V15.375Q1.125 13.475 2.463 12.137Q3.8 10.8 5.7 10.8H13.95V10Q13.95 9.725 13.775 9.55Q13.6 9.375 13.325 9.375H9.7Q9.425 9.375 9.262 9.55Q9.1 9.725 9.1 10H5.95Q5.95 8.425 7.05 7.325Q8.15 6.225 9.7 6.225H13.325Q14.9 6.225 16 7.325Q17.1 8.425 17.1 10V13.225Q17.525 13.225 17.812 12.938Q18.1 12.65 18.1 12.225V9.375Q18.1 7.65 19.312 6.437Q20.525 5.225 22.25 5.225H22.85V8.375H22.25Q21.825 8.375 21.538 8.662Q21.25 8.95 21.25 9.375V12.225Q21.25 13.95 20.038 15.162Q18.825 16.375 17.1 16.375V18.775Z"/>
    </Icon>
  )
});

export default IconMaterialIronOutlinedW700Filled;
