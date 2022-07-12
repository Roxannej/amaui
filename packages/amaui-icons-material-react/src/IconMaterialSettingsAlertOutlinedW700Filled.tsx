import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsAlertOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertOutlinedW700Filled'
      short_name='SettingsAlert'

      {...props}
    >
      <path d="M12 16.95q.6 0 1.025-.425.425-.425.425-1.025 0-.6-.425-1.025Q12.6 14.05 12 14.05q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425Zm-1.45-3.65h2.9V7.175h-2.9Zm-2.025 9.55-.45-3.475q-.125-.05-.25-.125l-.25-.15-3.225 1.375-3.5-6.1 2.775-2.1v-.55L.85 9.625l3.5-6.05 3.275 1.35q.125-.075.225-.138.1-.062.225-.112l.45-3.525h6.95l.45 3.525q.125.05.25.112.125.063.25.138l3.225-1.35 3.5 6.05-2.8 2.1V12q0 .075-.012.137-.013.063-.013.138l2.8 2.1-3.525 6.1-3.225-1.375q-.125.075-.225.15t-.225.125l-.45 3.475Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsAlertOutlinedW700Filled;