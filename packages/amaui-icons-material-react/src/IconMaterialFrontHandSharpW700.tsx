import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFrontHandSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandSharpW700'
      short_name='FrontHand'

      {...props}
    >
      <path d="M12.5 24.775Q8.625 24.775 5.925 22.075Q3.225 19.375 3.225 15.5V3.75H6.225V0.725H9.225V-0.775H15.775V1.225H18.775V7.25H21.775V15.5Q21.775 19.375 19.075 22.075Q16.375 24.775 12.5 24.775ZM12.5 22Q13.85 22 15.038 21.488Q16.225 20.975 17.1 20.1Q17.975 19.225 18.488 18.038Q19 16.85 19 15.5V10H18V15L17.65 15.025Q16.525 15.15 15.763 16Q15 16.85 15 18H13Q13 16.45 13.825 15.225Q14.65 14 16 13.425V4H15V11H13V2H12V11H10V3.5H9V12H7V6.5H6V15.5Q6 16.85 6.513 18.038Q7.025 19.225 7.9 20.1Q8.775 20.975 9.963 21.488Q11.15 22 12.5 22Z"/>
    </Icon>
  )
});

export default IconMaterialFrontHandSharpW700;
