import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVolumeUpSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolumeUpSharpW700Filled'
      short_name='VolumeUp'

      {...props}
    >
      <path d="M14.65 21.15V18.675Q16.85 17.975 18.25 16.137Q19.65 14.3 19.65 11.975Q19.65 9.65 18.25 7.812Q16.85 5.975 14.65 5.275V2.8Q17.9 3.525 19.963 6.087Q22.025 8.65 22.025 11.975Q22.025 15.3 19.963 17.863Q17.9 20.425 14.65 21.15ZM12.65 22.025 6.475 15.85H1.975V8.15H6.475L12.65 1.975ZM14.65 16.3V7.65Q15.95 8.275 16.738 9.45Q17.525 10.625 17.525 12Q17.525 13.375 16.738 14.525Q15.95 15.675 14.65 16.3Z"/>
    </Icon>
  )
});

export default IconMaterialVolumeUpSharpW700Filled;
