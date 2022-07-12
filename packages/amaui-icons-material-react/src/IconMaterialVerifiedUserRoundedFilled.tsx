import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerifiedUserRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerifiedUserRoundedFilled'
      short_name='VerifiedUser'

      {...props}
    >
      <path d="M10.95 12.7 9.575 11.3Q9.275 11 8.863 11Q8.45 11 8.15 11.3Q7.85 11.6 7.838 12.012Q7.825 12.425 8.125 12.725L10.25 14.85Q10.55 15.15 10.95 15.15Q11.35 15.15 11.65 14.85L15.9 10.6Q16.2 10.3 16.2 9.887Q16.2 9.475 15.9 9.175Q15.6 8.875 15.188 8.875Q14.775 8.875 14.475 9.175ZM12 21.925Q11.875 21.925 11.75 21.925Q11.625 21.925 11.525 21.875Q8.25 20.85 6.125 17.812Q4 14.775 4 11.1V6.375Q4 5.75 4.363 5.25Q4.725 4.75 5.3 4.525L11.3 2.275Q11.65 2.15 12 2.15Q12.35 2.15 12.7 2.275L18.7 4.525Q19.275 4.75 19.638 5.25Q20 5.75 20 6.375V11.1Q20 14.775 17.875 17.812Q15.75 20.85 12.475 21.875Q12.35 21.925 12 21.925Z"/>
    </Icon>
  )
});

export default IconMaterialVerifiedUserRoundedFilled;
