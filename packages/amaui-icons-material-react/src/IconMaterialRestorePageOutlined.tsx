import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestorePageOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestorePageOutlined'
      short_name='RestorePage'

      {...props}
    >
      <path d="M18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14L20 8V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM18 20Q18 20 18 20Q18 20 18 20V8.85L13.15 4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM12 17.75Q13.95 17.75 15.35 16.35Q16.75 14.95 16.75 13Q16.75 11.05 15.35 9.65Q13.95 8.25 12 8.25Q11.05 8.25 10.225 8.6Q9.4 8.95 8.75 9.55V8H7.25V12.25H11.5V10.75H9.7Q10.125 10.3 10.725 10.025Q11.325 9.75 12 9.75Q13.35 9.75 14.3 10.7Q15.25 11.65 15.25 13Q15.25 14.35 14.3 15.3Q13.35 16.25 12 16.25Q10.9 16.25 10.075 15.613Q9.25 14.975 8.9 14H7.35Q7.7 15.625 8.988 16.688Q10.275 17.75 12 17.75ZM6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4V8.85V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  )
});

export default IconMaterialRestorePageOutlined;
