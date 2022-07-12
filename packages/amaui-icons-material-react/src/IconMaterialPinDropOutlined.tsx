import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPinDropOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropOutlined'
      short_name='PinDrop'

      {...props}
    >
      <path d="M12 16.475Q14.475 14.475 15.738 12.625Q17 10.775 17 9.15Q17 7.75 16.488 6.762Q15.975 5.775 15.225 5.162Q14.475 4.55 13.6 4.275Q12.725 4 12 4Q11.275 4 10.4 4.275Q9.525 4.55 8.775 5.162Q8.025 5.775 7.513 6.762Q7 7.75 7 9.15Q7 10.775 8.262 12.625Q9.525 14.475 12 16.475ZM12 19Q8.475 16.4 6.737 13.95Q5 11.5 5 9.15Q5 7.375 5.638 6.037Q6.275 4.7 7.275 3.8Q8.275 2.9 9.525 2.45Q10.775 2 12 2Q13.225 2 14.475 2.45Q15.725 2.9 16.725 3.8Q17.725 4.7 18.363 6.037Q19 7.375 19 9.15Q19 11.5 17.262 13.95Q15.525 16.4 12 19ZM12 11Q12.825 11 13.413 10.412Q14 9.825 14 9Q14 8.175 13.413 7.587Q12.825 7 12 7Q11.175 7 10.588 7.587Q10 8.175 10 9Q10 9.825 10.588 10.412Q11.175 11 12 11ZM5 22V20H19V22ZM12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Q12 9.15 12 9.15Z"/>
    </Icon>
  )
});

export default IconMaterialPinDropOutlined;