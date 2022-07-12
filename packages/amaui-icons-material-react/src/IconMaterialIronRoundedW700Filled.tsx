import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronRoundedW700Filled'
      short_name='Iron'

      {...props}
    >
      <path d="M2.725 18.775Q2.075 18.775 1.6 18.312Q1.125 17.85 1.125 17.2V15.375Q1.125 13.475 2.463 12.137Q3.8 10.8 5.7 10.8H13.95V10Q13.95 9.725 13.775 9.55Q13.6 9.375 13.325 9.375H9.7Q9.5 9.375 9.363 9.438Q9.225 9.5 9.1 9.625Q8.875 9.825 8.637 9.912Q8.4 10 8.05 10Q7.075 10 6.675 9.1Q6.275 8.2 6.975 7.475Q7.475 6.9 8.175 6.562Q8.875 6.225 9.7 6.225H13.325Q14.9 6.225 16 7.325Q17.1 8.425 17.1 10V13.225Q17.525 13.225 17.812 12.938Q18.1 12.65 18.1 12.225V9.375Q18.1 7.65 19.188 6.575Q20.275 5.5 21.475 5.5Q22.125 5.5 22.488 5.875Q22.85 6.25 22.85 6.8Q22.85 7.4 22.588 7.8Q22.325 8.2 21.85 8.5Q21.6 8.625 21.425 8.85Q21.25 9.075 21.25 9.375V12.225Q21.25 13.95 20.038 15.162Q18.825 16.375 17.1 16.375V17.2Q17.1 17.85 16.638 18.312Q16.175 18.775 15.525 18.775Z"/>
    </Icon>
  )
});

export default IconMaterialIronRoundedW700Filled;
