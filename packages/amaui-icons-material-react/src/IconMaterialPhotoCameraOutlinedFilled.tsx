import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraOutlinedFilled'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V7Q2 6.175 2.588 5.588Q3.175 5 4 5H7.15L9 3H15L16.85 5H20Q20.825 5 21.413 5.588Q22 6.175 22 7V19Q22 19.825 21.413 20.413Q20.825 21 20 21Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoCameraOutlinedFilled;
