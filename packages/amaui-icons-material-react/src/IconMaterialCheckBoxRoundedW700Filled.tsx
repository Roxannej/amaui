import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckBoxRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxRoundedW700Filled'
      short_name='CheckBox'

      {...props}
    >
      <path d="M5.3 21.85Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85ZM10.525 16.15Q10.825 16.15 11.113 16.037Q11.4 15.925 11.625 15.7L16.925 10.4Q17.35 9.975 17.35 9.375Q17.35 8.775 16.9 8.325Q16.475 7.9 15.863 7.9Q15.25 7.9 14.825 8.325L10.525 12.625L9 11.1Q8.575 10.675 7.975 10.675Q7.375 10.675 6.925 11.125Q6.5 11.55 6.5 12.175Q6.5 12.8 6.925 13.225L9.425 15.7Q9.65 15.925 9.938 16.037Q10.225 16.15 10.525 16.15Z"/>
    </Icon>
  )
});

export default IconMaterialCheckBoxRoundedW700Filled;
