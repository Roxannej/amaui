import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraRoundedW700Filled'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM4.3 21.85Q2.975 21.85 2.062 20.938Q1.15 20.025 1.15 18.7V7.3Q1.15 5.975 2.062 5.062Q2.975 4.15 4.3 4.15H6.95L8.2 2.775Q8.65 2.275 9.262 2.025Q9.875 1.775 10.525 1.775H13.475Q14.125 1.775 14.738 2.025Q15.35 2.275 15.8 2.775L17.05 4.15H19.7Q21.025 4.15 21.938 5.062Q22.85 5.975 22.85 7.3V18.7Q22.85 20.025 21.938 20.938Q21.025 21.85 19.7 21.85Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoCameraRoundedW700Filled;
