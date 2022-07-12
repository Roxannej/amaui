import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceHubRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubRoundedW700'
      short_name='DeviceHub'

      {...props}
    >
      <path d="M4 21.575Q3.35 21.575 2.888 21.112Q2.425 20.65 2.425 20V17Q2.425 16.35 2.888 15.887Q3.35 15.425 4 15.425H6.95L10.625 11.775V9.3Q9.625 8.875 9.025 7.987Q8.425 7.1 8.425 6Q8.425 4.5 9.463 3.462Q10.5 2.425 12 2.425Q13.5 2.425 14.538 3.462Q15.575 4.5 15.575 6Q15.575 7.1 14.975 7.987Q14.375 8.875 13.375 9.3V11.775L17.05 15.425H20Q20.65 15.425 21.113 15.887Q21.575 16.35 21.575 17V20Q21.575 20.65 21.113 21.112Q20.65 21.575 20 21.575H17Q16.35 21.575 15.888 21.112Q15.425 20.65 15.425 20V17.75L12 14.325L8.575 17.75V20Q8.575 20.65 8.113 21.112Q7.65 21.575 7 21.575Z"/>
    </Icon>
  )
});

export default IconMaterialDeviceHubRoundedW700;
