import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorBackRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorBackRoundedW700Filled'
      short_name='DoorBack'

      {...props}
    >
      <path d="M3.725 21.85Q3.075 21.85 2.612 21.388Q2.15 20.925 2.15 20.275Q2.15 19.625 2.612 19.163Q3.075 18.7 3.725 18.7H4.15V5.3Q4.15 3.975 5.062 3.062Q5.975 2.15 7.3 2.15H16.7Q18.025 2.15 18.938 3.062Q19.85 3.975 19.85 5.3V18.7H20.275Q20.925 18.7 21.388 19.163Q21.85 19.625 21.85 20.275Q21.85 20.925 21.388 21.388Q20.925 21.85 20.275 21.85ZM10 13Q10.425 13 10.713 12.712Q11 12.425 11 12Q11 11.575 10.713 11.287Q10.425 11 10 11Q9.575 11 9.288 11.287Q9 11.575 9 12Q9 12.425 9.288 12.712Q9.575 13 10 13Z"/>
    </Icon>
  )
});

export default IconMaterialDoorBackRoundedW700Filled;
