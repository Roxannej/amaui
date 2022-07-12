import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveOutlinedW700'
      short_name='Save'

      {...props}
    >
      <path d="M21.85 6.65V18.7Q21.85 20.025 20.938 20.938Q20.025 21.85 18.7 21.85H5.3Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.3Q2.15 3.975 3.062 3.062Q3.975 2.15 5.3 2.15H17.35ZM18.7 7.975 16.025 5.3H5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H18.7Q18.7 18.7 18.7 18.7Q18.7 18.7 18.7 18.7ZM12 17.7Q13.25 17.7 14.125 16.825Q15 15.95 15 14.7Q15 13.45 14.125 12.575Q13.25 11.7 12 11.7Q10.75 11.7 9.875 12.575Q9 13.45 9 14.7Q9 15.95 9.875 16.825Q10.75 17.7 12 17.7ZM6.3 10.3H15.3V6.3H6.3ZM5.3 7.975V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7V5.3Q5.3 5.3 5.3 5.3Q5.3 5.3 5.3 5.3Z"/>
    </Icon>
  )
});

export default IconMaterialSaveOutlinedW700;