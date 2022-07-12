import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenOutlinedW100'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6.8Q20 6.5 19.75 6.25Q19.5 6 19.2 6H17V5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V9ZM3.3 9V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H7V6H4.8Q4.5 6 4.25 6.25Q4 6.5 4 6.8V9ZM17 18.7V18H19.2Q19.5 18 19.75 17.75Q20 17.5 20 17.2V15H20.7V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V15H4V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H7V18.7ZM7.1 14.9V9.1H16.9V14.9ZM7.8 14.2H16.2V9.8H7.8ZM7.8 14.2V9.8V14.2Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenOutlinedW100;
