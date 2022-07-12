import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutputOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutputOutlinedW700'
      short_name='Output'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.725Q20.05 2.15 20.962 3.062Q21.875 3.975 21.875 5.3V6.925H18.725V5.3Q18.725 5.3 18.725 5.3Q18.725 5.3 18.725 5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H18.725Q18.725 18.7 18.725 18.7Q18.725 18.7 18.725 18.7V17.075H21.875V18.7Q21.875 20.025 20.962 20.938Q20.05 21.85 18.725 21.85ZM16.625 17.425 14.425 15.225 16.05 13.575H8.35V10.425H16.05L14.425 8.775L16.625 6.575L22.05 12Z"/>
    </Icon>
  )
});

export default IconMaterialOutputOutlinedW700;
