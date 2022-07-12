import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNavigateBeforeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRoundedW700'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M12.9 17.7 8.3 13.1Q8.075 12.875 7.963 12.587Q7.85 12.3 7.85 12Q7.85 11.7 7.963 11.412Q8.075 11.125 8.3 10.9L12.9 6.3Q13.35 5.85 14 5.85Q14.65 5.85 15.1 6.3Q15.55 6.75 15.55 7.4Q15.55 8.05 15.1 8.5L11.6 12L15.1 15.5Q15.55 15.95 15.55 16.6Q15.55 17.25 15.1 17.7Q14.65 18.15 14 18.15Q13.35 18.15 12.9 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialNavigateBeforeRoundedW700;