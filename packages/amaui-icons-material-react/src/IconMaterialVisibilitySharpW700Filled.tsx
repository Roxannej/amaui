import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVisibilitySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilitySharpW700Filled'
      short_name='Visibility'

      {...props}
    >
      <path d="M12 16Q13.875 16 15.188 14.688Q16.5 13.375 16.5 11.5Q16.5 9.625 15.188 8.312Q13.875 7 12 7Q10.125 7 8.812 8.312Q7.5 9.625 7.5 11.5Q7.5 13.375 8.812 14.688Q10.125 16 12 16ZM12 13.675Q11.1 13.675 10.463 13.037Q9.825 12.4 9.825 11.5Q9.825 10.6 10.463 9.962Q11.1 9.325 12 9.325Q12.9 9.325 13.538 9.962Q14.175 10.6 14.175 11.5Q14.175 12.4 13.538 13.037Q12.9 13.675 12 13.675ZM12 19.775Q8.05 19.775 4.863 17.487Q1.675 15.2 0.225 11.5Q1.675 7.8 4.863 5.512Q8.05 3.225 12 3.225Q15.95 3.225 19.138 5.512Q22.325 7.8 23.775 11.5Q22.325 15.2 19.138 17.487Q15.95 19.775 12 19.775Z"/>
    </Icon>
  )
});

export default IconMaterialVisibilitySharpW700Filled;
