import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowRightAltRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowRightAltRoundedW700Filled'
      short_name='ArrowRightAlt'

      {...props}
    >
      <path d="M12.775 17.7Q12.325 17.25 12.338 16.587Q12.35 15.925 12.8 15.475L14.7 13.575H4.875Q4.225 13.575 3.763 13.112Q3.3 12.65 3.3 12Q3.3 11.35 3.763 10.887Q4.225 10.425 4.875 10.425H14.7L12.775 8.5Q12.325 8.05 12.325 7.4Q12.325 6.75 12.775 6.3Q13.225 5.85 13.888 5.85Q14.55 5.85 15 6.3L19.575 10.9Q19.8 11.125 19.913 11.412Q20.025 11.7 20.025 12Q20.025 12.3 19.913 12.587Q19.8 12.875 19.575 13.1L14.975 17.725Q14.525 18.175 13.875 18.163Q13.225 18.15 12.775 17.7Z"/>
    </Icon>
  )
});

export default IconMaterialArrowRightAltRoundedW700Filled;
