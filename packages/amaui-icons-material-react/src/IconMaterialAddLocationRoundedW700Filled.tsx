import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddLocationRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationRoundedW700Filled'
      short_name='AddLocation'

      {...props}
    >
      <path d="M12 14.375Q12.5 14.375 12.85 14.037Q13.2 13.7 13.2 13.2V11.375H15Q15.5 11.375 15.85 11.037Q16.2 10.7 16.2 10.2Q16.2 9.7 15.85 9.35Q15.5 9 15 9H13.2V7.2Q13.2 6.7 12.85 6.35Q12.5 6 12 6Q11.5 6 11.15 6.35Q10.8 6.7 10.8 7.2V9H9Q8.5 9 8.15 9.35Q7.8 9.7 7.8 10.2Q7.8 10.7 8.15 11.037Q8.5 11.375 9 11.375H10.8V13.2Q10.8 13.7 11.15 14.037Q11.5 14.375 12 14.375ZM12 22.075Q11.65 22.075 11.3 21.95Q10.95 21.825 10.675 21.575Q7.025 18.275 5.225 15.45Q3.425 12.625 3.425 10.2Q3.425 6.175 6.013 3.8Q8.6 1.425 12 1.425Q15.4 1.425 17.988 3.8Q20.575 6.175 20.575 10.2Q20.575 12.625 18.775 15.45Q16.975 18.275 13.325 21.575Q13.05 21.825 12.7 21.95Q12.35 22.075 12 22.075Z"/>
    </Icon>
  )
});

export default IconMaterialAddLocationRoundedW700Filled;
