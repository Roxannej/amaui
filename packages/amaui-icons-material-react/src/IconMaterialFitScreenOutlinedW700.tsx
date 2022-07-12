import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFitScreenOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenOutlinedW700'
      short_name='FitScreen'

      {...props}
    >
      <path d="M20 9V6Q20 6 20 6Q20 6 20 6H17V3.225H19.625Q20.95 3.225 21.863 4.137Q22.775 5.05 22.775 6.375V9ZM1.225 9V6.375Q1.225 5.05 2.138 4.137Q3.05 3.225 4.375 3.225H7V6H4Q4 6 4 6Q4 6 4 6V9ZM17 20.775V18H20Q20 18 20 18Q20 18 20 18V15H22.775V17.625Q22.775 18.95 21.863 19.862Q20.95 20.775 19.625 20.775ZM4.375 20.775Q3.05 20.775 2.138 19.862Q1.225 18.95 1.225 17.625V15H4V18Q4 18 4 18Q4 18 4 18H7V20.775ZM6 16V8H18V16ZM8.775 13.225H15.225V10.775H8.775ZM8.775 13.225V10.775V13.225Z"/>
    </Icon>
  )
});

export default IconMaterialFitScreenOutlinedW700;
