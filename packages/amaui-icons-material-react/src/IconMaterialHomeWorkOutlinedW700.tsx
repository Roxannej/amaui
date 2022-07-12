import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeWorkOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkOutlinedW700'
      short_name='HomeWork'

      {...props}
    >
      <path d="M17.175 9H19.175V7H17.175ZM17.175 13H19.175V11H17.175ZM17.175 17H19.175V15H17.175ZM17.175 21.375V18.625H20.8V5.375H12.55V6.525L9.8 4.5V2.625H23.55V21.375ZM0.4 21.375V10.8L7.8 5.55L15.175 10.8V21.375H8.8V15.625H6.8V21.375ZM3.175 18.625H4.8V13.625H10.8V18.625H12.4V12.2L7.8 8.95L3.175 12.2ZM17.175 9.875ZM10.8 18.625V13.625H4.8V18.625V13.625H7.8H10.8Z"/>
    </Icon>
  )
});

export default IconMaterialHomeWorkOutlinedW700;
