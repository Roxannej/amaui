import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialE911EmergencyTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911EmergencyTwoTone'
      short_name='E911Emergency'

      {...props}
    >
      <path d="M4.5 21.275V18.25H6.225L7.975 12.425Q8.25 11.475 9.062 10.863Q9.875 10.25 10.875 10.25H13.125Q14.125 10.25 14.938 10.863Q15.75 11.475 16.025 12.425L17.775 18.25H19.525V21.275ZM9.4 18.25H14.625L13.125 13.275Q13.125 13.275 13.125 13.275Q13.125 13.275 13.125 13.275H10.875Q10.875 13.275 10.875 13.275Q10.875 13.275 10.875 13.275ZM10.5 7.725V1.7H13.525V7.725ZM17.725 10.825 15.575 8.675 19.85 4.4 21.975 6.55ZM19.025 15.5V12.475H25.05V15.5ZM6.275 10.825 2.05 6.55 4.15 4.4 8.45 8.675ZM-1.025 15.5V12.475H5V15.5Z"/>
    </Icon>
  )
});

export default IconMaterialE911EmergencyTwoTone;
