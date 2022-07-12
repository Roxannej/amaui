import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTempPreferencesCustomTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempPreferencesCustomTwoTone'
      short_name='TempPreferencesCustom'

      {...props}
    >
      <path d="M18.85 9.7 17.4 6.55l-3.125-1.425 3.125-1.4L18.85.6l1.425 3.125 3.125 1.4-3.125 1.425Zm0 13.7-1.45-3.125-3.125-1.425 3.125-1.4 1.45-3.15 1.425 3.15 3.125 1.4-3.125 1.425Zm-9.675-2.825-2.7-5.875L.6 12l5.875-2.7 2.7-5.875 2.7 5.875L17.75 12l-5.875 2.7Z"/>
    </Icon>
  )
});

export default IconMaterialTempPreferencesCustomTwoTone;
