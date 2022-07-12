import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSettingsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOutlinedFilled'
      short_name='Settings'

      {...props}
    >
      <path d="M9.25 22 8.85 18.8Q8.525 18.675 8.238 18.5Q7.95 18.325 7.675 18.125L4.7 19.375L1.95 14.625L4.525 12.675Q4.5 12.5 4.5 12.337Q4.5 12.175 4.5 12Q4.5 11.825 4.5 11.662Q4.5 11.5 4.525 11.325L1.95 9.375L4.7 4.625L7.675 5.875Q7.95 5.675 8.25 5.5Q8.55 5.325 8.85 5.2L9.25 2H14.75L15.15 5.2Q15.475 5.325 15.763 5.5Q16.05 5.675 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325Q19.5 11.5 19.5 11.662Q19.5 11.825 19.5 12Q19.5 12.175 19.5 12.337Q19.5 12.5 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125Q16.05 18.325 15.75 18.5Q15.45 18.675 15.15 18.8L14.75 22ZM12.05 15.5Q13.5 15.5 14.525 14.475Q15.55 13.45 15.55 12Q15.55 10.55 14.525 9.525Q13.5 8.5 12.05 8.5Q10.575 8.5 9.562 9.525Q8.55 10.55 8.55 12Q8.55 13.45 9.562 14.475Q10.575 15.5 12.05 15.5Z"/>
    </Icon>
  )
});

export default IconMaterialSettingsOutlinedFilled;
