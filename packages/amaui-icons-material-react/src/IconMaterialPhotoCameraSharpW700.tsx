import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhotoCameraSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraSharpW700'
      short_name='PhotoCamera'

      {...props}
    >
      <path d="M12 17.5Q13.875 17.5 15.188 16.188Q16.5 14.875 16.5 13Q16.5 11.125 15.188 9.812Q13.875 8.5 12 8.5Q10.125 8.5 8.812 9.812Q7.5 11.125 7.5 13Q7.5 14.875 8.812 16.188Q10.125 17.5 12 17.5ZM1.15 21.85V4.15H6.95L9.15 1.775H14.85L17.05 4.15H22.85V21.85ZM4.3 18.7H19.7V7.3H4.3ZM12 13Z"/>
    </Icon>
  )
});

export default IconMaterialPhotoCameraSharpW700;