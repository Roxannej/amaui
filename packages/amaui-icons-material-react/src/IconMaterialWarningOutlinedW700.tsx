import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWarningOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WarningOutlinedW700'
      short_name='Warning'

      {...props}
    >
      <path d="M12 12.675ZM0.275 21.425 12 1.15 23.725 21.425ZM11 15H13V10.275H11ZM12 17.925Q12.45 17.925 12.788 17.587Q13.125 17.25 13.125 16.8Q13.125 16.35 12.788 16.025Q12.45 15.7 12 15.7Q11.55 15.7 11.213 16.025Q10.875 16.35 10.875 16.8Q10.875 17.25 11.213 17.587Q11.55 17.925 12 17.925ZM5.075 18.65H18.925L12 6.7Z"/>
    </Icon>
  )
});

export default IconMaterialWarningOutlinedW700;