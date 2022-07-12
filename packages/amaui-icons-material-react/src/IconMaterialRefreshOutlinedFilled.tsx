import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRefreshOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RefreshOutlinedFilled'
      short_name='Refresh'

      {...props}
    >
      <path d="M12 20Q8.65 20 6.325 17.675Q4 15.35 4 12Q4 8.65 6.325 6.325Q8.65 4 12 4Q13.725 4 15.3 4.713Q16.875 5.425 18 6.75V4H20V11H13V9H17.2Q16.4 7.6 15.013 6.8Q13.625 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18Q13.925 18 15.475 16.9Q17.025 15.8 17.65 14H19.75Q19.05 16.65 16.9 18.325Q14.75 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialRefreshOutlinedFilled;
