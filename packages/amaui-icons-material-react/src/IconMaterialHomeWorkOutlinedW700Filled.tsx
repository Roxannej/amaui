import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkOutlinedW700Filled'
      short_name='HomeWork'

      {...props}
    >
      <path d="M0.4 21.375V10.8L7.8 5.55L15.175 10.8V21.375H9.8V14.625H5.8V21.375ZM17.175 9H19.175V7H17.175ZM17.175 13H19.175V11H17.175ZM17.175 17H19.175V15H17.175ZM17.175 21.375V9.875L9.8 4.5V2.625H23.55V21.375Z"/>
    </Icon>
  )
});

export default IconMaterialHomeWorkOutlinedW700Filled;
