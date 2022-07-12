import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRepeatOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepeatOutlinedW700'
      short_name='Repeat'

      {...props}
    >
      <path d="M7 22.275 2.725 18 7 13.725 8.675 15.45 7.3 16.8H16.8V12.8H19.2V19.2H7.3L8.675 20.55ZM4.8 11.2V4.8H16.7L15.325 3.45L17 1.725L21.275 6L17 10.275L15.325 8.55L16.7 7.2H7.2V11.2Z"/>
    </Icon>
  )
});

export default IconMaterialRepeatOutlinedW700;