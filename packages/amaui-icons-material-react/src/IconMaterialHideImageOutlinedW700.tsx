import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageOutlinedW700'
      short_name='HideImage'

      {...props}
    >
      <path d="M21.85 18.5 18.7 15.35V5.3Q18.7 5.3 18.7 5.3Q18.7 5.3 18.7 5.3H8.65L5.5 2.15H18.7Q20.025 2.15 20.938 3.062Q21.85 3.975 21.85 5.3ZM20.325 23.675 18.5 21.85H5.3Q3.975 21.85 3.062 20.938Q2.15 20.025 2.15 18.7V5.5L0.325 3.675L2 2L22 22ZM5.575 17.3 8.6 13.05 11.25 15.875 11.825 15.175 5.3 8.65V18.7Q5.3 18.7 5.3 18.7Q5.3 18.7 5.3 18.7H15.35L13.975 17.3ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialHideImageOutlinedW700;