import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsAlertRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsAlertRoundedW700'
      short_name='SettingsAlert'

      {...props}
    >
      <path d="M12 16.7q.6 0 1.025-.425.425-.425.425-1.025 0-.6-.425-1.025Q12.6 13.8 12 13.8q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425Zm-1.45-3.65h2.9V7.675h-2.9Zm-2.025 9.8-.45-3.475q-.125-.05-.25-.125l-.25-.15-3.225 1.375-3.5-6.1 2.775-2.1v-.55L.85 9.625l3.5-6.05 3.275 1.35q.125-.075.225-.138.1-.062.225-.112l.45-3.525h6.95l.45 3.525q.125.05.25.112.125.063.25.138l3.225-1.35 3.5 6.05-2.8 2.1V12q0 .075-.012.137-.013.063-.013.138l2.8 2.1-3.525 6.1-3.225-1.375q-.125.075-.225.15t-.225.125l-.45 3.475ZM12 12Zm-.725 7.7h1.4l.375-2.6q.8-.2 1.525-.6.725-.4 1.275-1.05l2.45 1.025.675-1.25L16.9 13.65q.125-.4.2-.813.075-.412.075-.837t-.075-.838q-.075-.412-.2-.812l2.125-1.575-.725-1.25-2.425 1.05q-.55-.65-1.275-1.075-.725-.425-1.55-.6l-.325-2.6h-1.45l-.3 2.575q-.85.175-1.588.6Q8.65 7.9 8.075 8.55l-2.4-1.025-.7 1.25 2.05 1.525q-.125.425-.2.837-.075.413-.075.863 0 .425.075.85t.2.85l-2.05 1.525.7 1.25 2.4-1.025q.575.625 1.325 1.05.75.425 1.575.625Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsAlertRoundedW700;
