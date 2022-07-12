import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewQuiltOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewQuiltOutlinedW700'
      short_name='ViewQuilt'

      {...props}
    >
      <path d="M2.15 4.15H21.85V19.85H2.15ZM10.325 7.3V11H18.7V7.3ZM18.7 13H15.525V16.7H18.7ZM10.325 13V16.7H13.525V13ZM5.3 16.7H8.325V7.3H5.3Z"/>
    </Icon>
  )
});

export default IconMaterialViewQuiltOutlinedW700;