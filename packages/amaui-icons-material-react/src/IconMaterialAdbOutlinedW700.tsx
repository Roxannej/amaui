import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAdbOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdbOutlinedW700'
      short_name='Adb'

      {...props}
    >
      <path d="M4.475 10.9V9.825Q4.475 7.875 5.35 6.287Q6.225 4.7 7.7 3.65L5.675 1.65L6.625 0.675L8.9 2.95Q9.575 2.6 10.388 2.45Q11.2 2.3 12 2.3Q12.8 2.3 13.6 2.45Q14.4 2.6 15.075 2.95L17.375 0.675L18.325 1.65L16.3 3.65Q17.775 4.7 18.65 6.287Q19.525 7.875 19.525 9.825V10.9ZM15.225 8.75Q15.675 8.75 15.988 8.438Q16.3 8.125 16.3 7.675Q16.3 7.225 15.988 6.912Q15.675 6.6 15.225 6.6Q14.775 6.6 14.463 6.912Q14.15 7.225 14.15 7.675Q14.15 8.125 14.463 8.438Q14.775 8.75 15.225 8.75ZM8.775 8.75Q9.225 8.75 9.538 8.438Q9.85 8.125 9.85 7.675Q9.85 7.225 9.538 6.912Q9.225 6.6 8.775 6.6Q8.325 6.6 8.013 6.912Q7.7 7.225 7.7 7.675Q7.7 8.125 8.013 8.438Q8.325 8.75 8.775 8.75ZM12 23.825Q8.85 23.825 6.662 21.612Q4.475 19.4 4.475 16.275V11.975H19.525V16.275Q19.525 19.4 17.338 21.612Q15.15 23.825 12 23.825Z"/>
    </Icon>
  )
});

export default IconMaterialAdbOutlinedW700;
