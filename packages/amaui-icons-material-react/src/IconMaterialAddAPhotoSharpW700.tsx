import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAPhotoSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoSharpW700'
      short_name='AddAPhoto'

      {...props}
    >
      <path d="M11.2 18.5Q13.075 18.5 14.388 17.188Q15.7 15.875 15.7 14Q15.7 12.125 14.388 10.812Q13.075 9.5 11.2 9.5Q9.325 9.5 8.013 10.812Q6.7 12.125 6.7 14Q6.7 15.875 8.013 17.188Q9.325 18.5 11.2 18.5ZM0.35 22.85V5.15H6.15L8.35 2.775H13.625V8.3H3.5V19.7H18.875V11.575H22.025V22.85ZM18.9 8.575V6.3H16.625V3.925H18.9V1.65H21.3V3.925H23.55V6.3H21.3V8.575ZM3.5 19.7V8.3V11.575V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialAddAPhotoSharpW700;
