import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlaceItemTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlaceItemTwoTone'
      short_name='PlaceItem'

      {...props}
    >
      <path d="M4.9 21.975Q3.625 21.975 2.75 21.1Q1.875 20.225 1.875 18.95V9.3Q1.875 8.05 2.75 7.162Q3.625 6.275 4.9 6.275H8.625V9.3H4.9Q4.9 9.3 4.9 9.3Q4.9 9.3 4.9 9.3V18.95Q4.9 18.95 4.9 18.95Q4.9 18.95 4.9 18.95H19.1Q19.1 18.95 19.1 18.95Q19.1 18.95 19.1 18.95V9.3Q19.1 9.3 19.1 9.3Q19.1 9.3 19.1 9.3H15.4V6.275H19.1Q20.375 6.275 21.25 7.162Q22.125 8.05 22.125 9.3V18.95Q22.125 20.225 21.25 21.1Q20.375 21.975 19.1 21.975ZM12 17.325 6.75 12.075 8.875 9.95 10.5 11.6V0.4H13.525V11.575L15.15 9.95L17.25 12.075Z"/>
    </Icon>
  )
});

export default IconMaterialPlaceItemTwoTone;
