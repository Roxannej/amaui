import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoOutlinedW700'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M8 15.95H10.125L10.7 13.975H13.275L13.85 15.95H16.05L13.025 7.225H10.975ZM11.1 12.35 11.95 9.35H12.05L12.9 12.35ZM12 23.675 8.525 20.275H3.725V15.475L0.325 12L3.725 8.525V3.7H8.525L12 0.275L15.475 3.7H20.3V8.525L23.725 12L20.3 15.475V20.275H15.475ZM12.025 11.975ZM12 19.275 14.15 17.125H17.15V14.15L19.3 12L17.15 9.85V6.85H14.15L12 4.7L9.85 6.85H6.875V9.85L4.725 12L6.875 14.15V17.125H9.85Z"/>
    </Icon>
  )
});

export default IconMaterialBrightnessAutoOutlinedW700;