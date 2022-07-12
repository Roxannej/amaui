import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbsUpDownOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbsUpDownOutlinedFilled'
      short_name='ThumbsUpDown'

      {...props}
    >
      <path d="M2 14Q1.175 14 0.588 13.412Q0 12.825 0 12V6Q0 5.7 0.125 5.425Q0.25 5.15 0.45 4.95L5.4 0L6.15 0.75Q6.3 0.9 6.4 1.137Q6.5 1.375 6.5 1.6V1.8L5.8 5H11Q11.425 5 11.713 5.287Q12 5.575 12 6V7.25Q12 7.4 11.975 7.537Q11.95 7.675 11.9 7.8L9.65 13.1Q9.475 13.525 9.088 13.762Q8.7 14 8.25 14ZM18.6 24 17.85 23.25Q17.7 23.1 17.6 22.863Q17.5 22.625 17.5 22.4V22.2L18.2 19H13Q12.575 19 12.288 18.712Q12 18.425 12 18V16.75Q12 16.6 12.025 16.462Q12.05 16.325 12.1 16.2L14.35 10.9Q14.55 10.475 14.925 10.238Q15.3 10 15.75 10H22Q22.825 10 23.413 10.587Q24 11.175 24 12V18Q24 18.3 23.888 18.562Q23.775 18.825 23.55 19.05Z"/>
    </Icon>
  )
});

export default IconMaterialThumbsUpDownOutlinedFilled;
