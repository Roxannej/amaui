import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationSharpW700Filled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M12 22.775Q11.425 22.775 10.975 22.438Q10.525 22.1 10.225 21.475Q9.35 19.6 8.725 18.55Q8.1 17.5 7.2 16.3Q5.85 14.575 5 12.962Q4.15 11.35 4.15 9Q4.15 5.725 6.438 3.437Q8.725 1.15 12 1.15Q15.275 1.15 17.562 3.437Q19.85 5.725 19.85 9Q19.85 11.475 18.925 13.113Q18 14.75 16.8 16.3Q15.875 17.5 15.25 18.562Q14.625 19.625 13.775 21.475Q13.5 22.1 13.038 22.438Q12.575 22.775 12 22.775ZM10.75 12.275H13.25V10.225H15.275V7.725H13.25V5.7H10.75V7.725H8.7V10.225H10.75Z"/>
    </Icon>
  )
});

export default IconMaterialAddLocationSharpW700Filled;
