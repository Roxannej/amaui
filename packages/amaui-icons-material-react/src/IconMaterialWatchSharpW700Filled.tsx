import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchSharpW700Filled'
      short_name='Watch'

      {...props}
    >
      <path d="M8.7 23.525 7.075 18.1Q5.8 17.05 4.975 15.463Q4.15 13.875 4.15 12Q4.15 10.125 4.975 8.537Q5.8 6.95 7.075 5.9L8.7 0.475H15.3L16.925 5.9Q18.2 6.95 19.025 8.537Q19.85 10.125 19.85 12Q19.85 13.875 19.025 15.463Q18.2 17.05 16.925 18.1L15.3 23.525ZM12 16.7Q13.95 16.7 15.325 15.325Q16.7 13.95 16.7 12Q16.7 10.05 15.325 8.675Q13.95 7.3 12 7.3Q10.05 7.3 8.675 8.675Q7.3 10.05 7.3 12Q7.3 13.95 8.675 15.325Q10.05 16.7 12 16.7Z"/>
    </Icon>
  )
});

export default IconMaterialWatchSharpW700Filled;
