import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOpenInNewOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewOutlinedW700'
      short_name='OpenInNew'

      {...props}
    >
      <path d="M21.85 12V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85H5.3Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H12V5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H18.7Q18.7 18.7 18.7 18.7Q18.7 18.7 18.7 18.7V12ZM10.475 15.7 8.3 13.525 16.525 5.3H14V2.15H21.85V10H18.7V7.475Z"/>
    </Icon>
  )
});

export default IconMaterialOpenInNewOutlinedW700;