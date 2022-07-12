import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarRepairOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarRepairOutlinedFilled'
      short_name='CarRepair'

      {...props}
    >
      <path d="M11 22V19H4V17H20V19H13V22ZM9 11.5Q9.425 11.5 9.713 11.212Q10 10.925 10 10.5Q10 10.075 9.713 9.787Q9.425 9.5 9 9.5Q8.575 9.5 8.288 9.787Q8 10.075 8 10.5Q8 10.925 8.288 11.212Q8.575 11.5 9 11.5ZM15 11.5Q15.425 11.5 15.713 11.212Q16 10.925 16 10.5Q16 10.075 15.713 9.787Q15.425 9.5 15 9.5Q14.575 9.5 14.288 9.787Q14 10.075 14 10.5Q14 10.925 14.288 11.212Q14.575 11.5 15 11.5ZM5 8.6 6.65 3.8Q6.775 3.45 7.062 3.225Q7.35 3 7.7 3H16.3Q16.65 3 16.938 3.225Q17.225 3.45 17.35 3.8L19 8.6V15.2Q19 15.55 18.775 15.775Q18.55 16 18.2 16H17.8Q17.45 16 17.225 15.775Q17 15.55 17 15.2V14H7V15.2Q7 15.55 6.775 15.775Q6.55 16 6.2 16H5.8Q5.45 16 5.225 15.775Q5 15.55 5 15.2ZM7.65 7H16.35L15.65 5H8.35Z"/>
    </Icon>
  )
});

export default IconMaterialCarRepairOutlinedFilled;
