import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestConnectTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestConnectTwoTone'
      short_name='NestConnect'

      {...props}
    >
      <path d="M12 19.5Q9.725 19.5 8.113 17.887Q6.5 16.275 6.5 14V10Q6.5 7.7 8.113 6.087Q9.725 4.475 12 4.475Q14.3 4.475 15.913 6.087Q17.525 7.7 17.525 10V14Q17.525 16.275 15.913 17.887Q14.3 19.5 12 19.5ZM12 16.475Q13.05 16.475 13.775 15.75Q14.5 15.025 14.5 14V10Q14.5 8.95 13.775 8.225Q13.05 7.5 12 7.5Q10.975 7.5 10.25 8.225Q9.525 8.95 9.525 10V14Q9.525 15.025 10.25 15.75Q10.975 16.475 12 16.475ZM5.25 23.775Q4 23.775 3.112 22.887Q2.225 22 2.225 20.75V3.225Q2.225 2 3.112 1.1Q4 0.2 5.25 0.2H18.775Q20 0.2 20.9 1.1Q21.8 2 21.8 3.225V20.75Q21.8 22 20.9 22.887Q20 23.775 18.775 23.775ZM5.25 20.75H18.775Q18.775 20.75 18.775 20.75Q18.775 20.75 18.775 20.75V3.225Q18.775 3.225 18.775 3.225Q18.775 3.225 18.775 3.225H5.25Q5.25 3.225 5.25 3.225Q5.25 3.225 5.25 3.225V20.75Q5.25 20.75 5.25 20.75Q5.25 20.75 5.25 20.75ZM12 10.5Q11.625 10.5 11.35 10.225Q11.075 9.95 11.075 9.575Q11.075 9.175 11.35 8.9Q11.625 8.625 12 8.625Q12.4 8.625 12.675 8.9Q12.95 9.175 12.95 9.575Q12.95 9.95 12.675 10.225Q12.4 10.5 12 10.5Z"/>
    </Icon>
  )
});

export default IconMaterialNestConnectTwoTone;
