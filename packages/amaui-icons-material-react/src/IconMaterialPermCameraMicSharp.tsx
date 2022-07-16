import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermCameraMicSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermCameraMicSharp'
      short_name='PermCameraMic'

      {...props}
    >
      <path d="M9 21H2V5H7.15L8.95 3H14.95L16.85 5H22V21H15V19H20V7H15.95L14.15 5H9.9L8.05 7H4V19H9ZM11 21H13V17.9Q15.15 17.55 16.575 15.887Q18 14.225 18 12H16Q16 13.65 14.825 14.825Q13.65 16 12 16Q10.35 16 9.175 14.825Q8 13.65 8 12H6Q6 14.225 7.425 15.887Q8.85 17.55 11 17.9ZM12 14Q12.825 14 13.413 13.412Q14 12.825 14 12V8Q14 7.175 13.413 6.588Q12.825 6 12 6Q11.175 6 10.588 6.588Q10 7.175 10 8V12Q10 12.825 10.588 13.412Q11.175 14 12 14ZM4 19H8.05H9.9H14.15H15.95H20H15H9H4Z"/>
    </Icon>
  );
});

export default IconMaterialPermCameraMicSharp;