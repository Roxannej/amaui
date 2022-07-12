import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatBoldRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldRoundedW700Filled'
      short_name='FormatBold'

      {...props}
    >
      <path d="M8.925 19.225Q7.625 19.225 6.7 18.3Q5.775 17.375 5.775 16.075V6.7Q5.775 5.4 6.7 4.475Q7.625 3.55 8.925 3.55H13.35Q15.525 3.55 16.85 4.775Q18.175 6 18.175 7.85Q18.175 9.025 17.725 9.8Q17.275 10.575 16.4 11V11.075Q17.45 11.5 18.062 12.387Q18.675 13.275 18.675 14.725Q18.675 16.775 17.113 18Q15.55 19.225 13.5 19.225ZM9.65 9.625H12.65Q13.325 9.625 13.763 9.238Q14.2 8.85 14.2 8.2Q14.2 7.55 13.763 7.162Q13.325 6.775 12.65 6.775H9.65ZM9.65 15.975H12.875Q13.675 15.975 14.138 15.55Q14.6 15.125 14.6 14.4Q14.6 13.675 14.138 13.237Q13.675 12.8 12.875 12.8H9.65Z"/>
    </Icon>
  )
});

export default IconMaterialFormatBoldRoundedW700Filled;
