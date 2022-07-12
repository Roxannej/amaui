import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoundedW700'
      short_name='Add'

      {...props}
    >
      <path d="M12 19.575Q11.35 19.575 10.888 19.112Q10.425 18.65 10.425 18V13.575H6Q5.35 13.575 4.888 13.112Q4.425 12.65 4.425 12Q4.425 11.35 4.888 10.887Q5.35 10.425 6 10.425H10.425V6Q10.425 5.35 10.888 4.887Q11.35 4.425 12 4.425Q12.65 4.425 13.113 4.887Q13.575 5.35 13.575 6V10.425H18Q18.65 10.425 19.113 10.887Q19.575 11.35 19.575 12Q19.575 12.65 19.113 13.112Q18.65 13.575 18 13.575H13.575V18Q13.575 18.65 13.113 19.112Q12.65 19.575 12 19.575Z"/>
    </Icon>
  )
});

export default IconMaterialAddRoundedW700;
