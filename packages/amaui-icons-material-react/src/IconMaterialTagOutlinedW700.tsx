import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTagOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TagOutlinedW700'
      short_name='Tag'

      {...props}
    >
      <path d="M5.275 20.575 6.275 16.575H2.775L3.55 13.425H7.05L7.775 10.575H3.775L4.55 7.425H8.55L9.55 3.425H12.725L11.725 7.425H14.55L15.55 3.425H18.725L17.725 7.425H21.225L20.45 10.575H16.95L16.225 13.425H20.225L19.45 16.575H15.45L14.45 20.575H11.275L12.275 16.575H9.45L8.45 20.575ZM10.225 13.425H13.05L13.775 10.575H10.95Z"/>
    </Icon>
  )
});

export default IconMaterialTagOutlinedW700;