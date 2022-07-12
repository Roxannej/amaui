import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenRoundedW700Filled'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6Q20 6 20 6Q20 6 20 6H17V3.225H20Q21.175 3.225 21.975 4.025Q22.775 4.825 22.775 6V9ZM1.225 9V6Q1.225 4.825 2.025 4.025Q2.825 3.225 4 3.225H7V6H4Q4 6 4 6Q4 6 4 6V9ZM17 20.775V18H20Q20 18 20 18Q20 18 20 18V15H22.775V18Q22.775 19.175 21.975 19.975Q21.175 20.775 20 20.775ZM4 20.775Q2.825 20.775 2.025 19.975Q1.225 19.175 1.225 18V15H4V18Q4 18 4 18Q4 18 4 18H7V20.775ZM15.225 16H8.775Q7.625 16 6.812 15.188Q6 14.375 6 13.225V10.775Q6 9.625 6.812 8.812Q7.625 8 8.775 8H15.225Q16.375 8 17.188 8.812Q18 9.625 18 10.775V13.225Q18 14.375 17.188 15.188Q16.375 16 15.225 16Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenRoundedW700Filled;
