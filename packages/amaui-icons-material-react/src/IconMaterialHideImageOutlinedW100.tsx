import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideImageOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideImageOutlinedW100'
      short_name='HideImage'

      {...props}
    >
      <path d="M19.7 16.85 19 16.15V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H7.85L7.15 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8ZM20.7 21.7 18.7 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.3L2.3 3.3L2.8 2.8L21.2 21.2ZM7.95 16.35 9.6 14.2 11.2 16.05 12.925 13.925 5 6V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H18L15.35 16.35ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  )
});

export default IconMaterialHideImageOutlinedW100;
