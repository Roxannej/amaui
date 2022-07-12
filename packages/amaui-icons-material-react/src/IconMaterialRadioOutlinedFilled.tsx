import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRadioOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RadioOutlinedFilled'
      short_name='Radio'

      {...props}
    >
      <path d="M8.3 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V20Q22 20.825 21.413 21.413Q20.825 22 20 22H4Q3.175 22 2.588 21.413Q2 20.825 2 20V8Q2 7.375 2.338 6.875Q2.675 6.375 3.25 6.15L15.9 1L16.55 2.65ZM4 11H16V9H18V11H20V8Q20 8 20 8Q20 8 20 8H4Q4 8 4 8Q4 8 4 8ZM8 19Q9.05 19 9.775 18.275Q10.5 17.55 10.5 16.5Q10.5 15.45 9.775 14.725Q9.05 14 8 14Q6.95 14 6.225 14.725Q5.5 15.45 5.5 16.5Q5.5 17.55 6.225 18.275Q6.95 19 8 19Z"/>
    </Icon>
  )
});

export default IconMaterialRadioOutlinedFilled;