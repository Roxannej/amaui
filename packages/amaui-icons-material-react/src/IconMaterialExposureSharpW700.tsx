import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureSharpW700'
      short_name='Exposure'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM5.8 8.7H11.2V6.8H5.8ZM5.3 18.7H18.7V5.3ZM13.875 17.775V15.775H11.875V13.875H13.875V11.875H15.775V13.875H17.775V15.775H15.775V17.775Z"/>
    </Icon>
  )
});

export default IconMaterialExposureSharpW700;