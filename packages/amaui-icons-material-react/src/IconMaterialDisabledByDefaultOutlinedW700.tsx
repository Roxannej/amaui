import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultOutlinedW700'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M8.4 17.275 12 13.675 15.6 17.275 17.275 15.6 13.675 12 17.275 8.4 15.6 6.725 12 10.325 8.4 6.725 6.725 8.4 10.325 12 6.725 15.6ZM5.3 18.7H18.7V5.3H5.3ZM5.3 21.85Q4 21.85 3.075 20.925Q2.15 20 2.15 18.7V5.3Q2.15 4 3.075 3.075Q4 2.15 5.3 2.15H18.7Q20 2.15 20.925 3.075Q21.85 4 21.85 5.3V18.7Q21.85 20 20.925 20.925Q20 21.85 18.7 21.85ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialDisabledByDefaultOutlinedW700;
