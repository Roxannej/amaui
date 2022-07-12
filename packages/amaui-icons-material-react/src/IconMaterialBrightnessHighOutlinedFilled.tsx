import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessHighOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessHighOutlinedFilled'
      short_name='BrightnessHigh'

      {...props}
    >
      <path d="M12 23.3 8.65 20H4V15.35L0.7 12L4 8.65V4H8.65L12 0.7L15.35 4H20V8.65L23.3 12L20 15.35V20H15.35ZM12 18Q14.5 18 16.25 16.25Q18 14.5 18 12Q18 9.5 16.25 7.75Q14.5 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18ZM12 16Q10.35 16 9.175 14.825Q8 13.65 8 12Q8 10.35 9.175 9.175Q10.35 8 12 8Q13.65 8 14.825 9.175Q16 10.35 16 12Q16 13.65 14.825 14.825Q13.65 16 12 16Z"/>
    </Icon>
  )
});

export default IconMaterialBrightnessHighOutlinedFilled;
