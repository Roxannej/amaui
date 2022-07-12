import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScienceOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceOutlinedW700'
      short_name='Science'

      {...props}
    >
      <path d="M5 21.85Q3.175 21.85 2.425 20.212Q1.675 18.575 2.8 17.225L8.15 10.7V5.575H7.925Q7.275 5.575 6.812 5.112Q6.35 4.65 6.35 4Q6.35 3.35 6.812 2.887Q7.275 2.425 7.925 2.425H16.075Q16.725 2.425 17.188 2.887Q17.65 3.35 17.65 4Q17.65 4.65 17.188 5.112Q16.725 5.575 16.075 5.575H15.85V10.7L21.2 17.225Q22.325 18.575 21.575 20.212Q20.825 21.85 19 21.85ZM5.65 18.7H18.35L12.7 11.825V5.575H11.3V11.825ZM12 12.125Z"/>
    </Icon>
  )
});

export default IconMaterialScienceOutlinedW700;
