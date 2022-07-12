import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFindInPageOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageOutlinedFilled'
      short_name='FindInPage'

      {...props}
    >
      <path d="M12 15Q12.825 15 13.413 14.412Q14 13.825 14 13Q14 12.175 13.413 11.587Q12.825 11 12 11Q11.175 11 10.588 11.587Q10 12.175 10 13Q10 13.825 10.588 14.412Q11.175 15 12 15ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H15L20 8V19.575L15.425 15Q15.7 14.575 15.85 14.075Q16 13.575 16 13Q16 11.35 14.825 10.175Q13.65 9 12 9Q10.35 9 9.175 10.175Q8 11.35 8 13Q8 14.65 9.175 15.825Q10.35 17 12 17Q12.575 17 13.088 16.85Q13.6 16.7 14.025 16.425L19.2 21.6Q18.975 21.8 18.625 21.9Q18.275 22 18 22Z"/>
    </Icon>
  )
});

export default IconMaterialFindInPageOutlinedFilled;