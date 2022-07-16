import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoreRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreRoundedW100Filled'
      short_name='More'

      {...props}
    >
      <path d="M9.35 12.7Q9.625 12.7 9.838 12.487Q10.05 12.275 10.05 12Q10.05 11.725 9.838 11.512Q9.625 11.3 9.35 11.3Q9.075 11.3 8.863 11.512Q8.65 11.725 8.65 12Q8.65 12.275 8.863 12.487Q9.075 12.7 9.35 12.7ZM12.85 12.7Q13.125 12.7 13.338 12.487Q13.55 12.275 13.55 12Q13.55 11.725 13.338 11.512Q13.125 11.3 12.85 11.3Q12.575 11.3 12.363 11.512Q12.15 11.725 12.15 12Q12.15 12.275 12.363 12.487Q12.575 12.7 12.85 12.7ZM16.35 12.7Q16.625 12.7 16.837 12.487Q17.05 12.275 17.05 12Q17.05 11.725 16.837 11.512Q16.625 11.3 16.35 11.3Q16.075 11.3 15.863 11.512Q15.65 11.725 15.65 12Q15.65 12.275 15.863 12.487Q16.075 12.7 16.35 12.7ZM9.65 17.7Q9.075 17.7 8.613 17.425Q8.15 17.15 7.8 16.7L5.075 12.875Q4.8 12.475 4.8 12Q4.8 11.525 5.075 11.125L7.8 7.25Q8.125 6.8 8.613 6.55Q9.1 6.3 9.65 6.3H18.05Q18.675 6.3 19.113 6.738Q19.55 7.175 19.55 7.8V16.2Q19.55 16.825 19.113 17.262Q18.675 17.7 18.05 17.7Z"/>
    </Icon>
  );
});

export default IconMaterialMoreRoundedW100Filled;