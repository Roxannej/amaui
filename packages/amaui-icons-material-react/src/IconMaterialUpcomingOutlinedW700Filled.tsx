import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpcomingOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingOutlinedW700Filled'
      short_name='Upcoming'

      {...props}
    >
      <path d="M17.975 10.45 15.775 8.25 20.125 3.9 22.35 6.1ZM10.425 7.425V1.275H13.575V7.425ZM6.025 10.45 1.65 6.1 3.875 3.9 8.225 8.25ZM4.3 22.675Q2.975 22.675 2.062 21.763Q1.15 20.85 1.15 19.525V15.15Q1.15 13.825 2.062 12.912Q2.975 12 4.3 12H9Q9 13.25 9.875 14.125Q10.75 15 12 15Q13.25 15 14.125 14.125Q15 13.25 15 12H19.7Q21.025 12 21.938 12.912Q22.85 13.825 22.85 15.15V19.525Q22.85 20.85 21.938 21.763Q21.025 22.675 19.7 22.675Z"/>
    </Icon>
  )
});

export default IconMaterialUpcomingOutlinedW700Filled;