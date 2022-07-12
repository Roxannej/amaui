import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinOutlined'
      short_name='Pin'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM6.5 15H7.65V9H6.75L5 10.25L5.6 11.15L6.5 10.5ZM9.6 15H13.5V14H11.15L11.1 13.95Q11.625 13.45 11.963 13.1Q12.3 12.75 12.5 12.55Q12.95 12.1 13.175 11.65Q13.4 11.2 13.4 10.7Q13.4 9.975 12.85 9.488Q12.3 9 11.45 9Q10.8 9 10.275 9.375Q9.75 9.75 9.55 10.35L10.55 10.75Q10.675 10.425 10.913 10.237Q11.15 10.05 11.45 10.05Q11.825 10.05 12.062 10.25Q12.3 10.45 12.3 10.75Q12.3 11.025 12.2 11.262Q12.1 11.5 11.75 11.85Q11.475 12.125 10.95 12.65Q10.425 13.175 9.6 14ZM17 15Q17.9 15 18.45 14.5Q19 14 19 13.2Q19 12.75 18.75 12.4Q18.5 12.05 18.05 11.85V11.8Q18.4 11.6 18.6 11.287Q18.8 10.975 18.8 10.55Q18.8 9.875 18.275 9.438Q17.75 9 16.95 9Q16.325 9 15.787 9.363Q15.25 9.725 15.1 10.25L16.1 10.65Q16.2 10.35 16.425 10.175Q16.65 10 16.95 10Q17.275 10 17.488 10.188Q17.7 10.375 17.7 10.65Q17.7 11 17.45 11.2Q17.2 11.4 16.8 11.4H16.35V12.4H16.85Q17.35 12.4 17.625 12.6Q17.9 12.8 17.9 13.15Q17.9 13.475 17.625 13.712Q17.35 13.95 17 13.95Q16.575 13.95 16.35 13.762Q16.125 13.575 15.95 13.1L14.95 13.5Q15.125 14.225 15.662 14.613Q16.2 15 17 15ZM4 18H20Q20 18 20 18Q20 18 20 18V6Q20 6 20 6Q20 6 20 6H4Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18ZM4 18Q4 18 4 18Q4 18 4 18V6Q4 6 4 6Q4 6 4 6Q4 6 4 6Q4 6 4 6V18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  )
});

export default IconMaterialPinOutlined;
