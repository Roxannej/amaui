import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSharpW700'
      short_name='House'

      {...props}
    >
      <path d="M4.625 20.375V12.375H1L12 2.5L15.625 5.75V3.625H19.375V9.15L23 12.375H19.375V20.375H12.625V14.575H11.375V20.375ZM7.375 17.625H8.625V11.8H15.375V17.625H16.625V10.375L12 6.225L7.375 10.375ZM8.625 11.8H12H15.375H8.625ZM9.8 10.675H14.2Q14.2 9.775 13.55 9.15Q12.9 8.525 12 8.525Q11.1 8.525 10.45 9.15Q9.8 9.775 9.8 10.675Z"/>
    </Icon>
  )
});

export default IconMaterialHouseSharpW700;
