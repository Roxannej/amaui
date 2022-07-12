import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOutlinedW700'
      short_name='Lock'

      {...props}
    >
      <path d="M12 0.35Q14.25 0.35 15.812 1.937Q17.375 3.525 17.375 5.8V7.075H17.7Q19 7.075 19.925 8Q20.85 8.925 20.85 10.225V19.625Q20.85 20.925 19.925 21.85Q19 22.775 17.7 22.775H6.3Q5 22.775 4.075 21.85Q3.15 20.925 3.15 19.625V10.225Q3.15 8.925 4.075 8Q5 7.075 6.3 7.075H6.625V5.8Q6.625 3.525 8.188 1.937Q9.75 0.35 12 0.35ZM12 3.5Q11.05 3.5 10.413 4.175Q9.775 4.85 9.775 5.8V7.075H14.225V5.8Q14.225 4.85 13.588 4.175Q12.95 3.5 12 3.5ZM6.3 19.625H17.7Q17.7 19.625 17.7 19.625Q17.7 19.625 17.7 19.625V10.225Q17.7 10.225 17.7 10.225Q17.7 10.225 17.7 10.225H6.3Q6.3 10.225 6.3 10.225Q6.3 10.225 6.3 10.225V19.625Q6.3 19.625 6.3 19.625Q6.3 19.625 6.3 19.625ZM12 12.925Q11.175 12.925 10.588 13.512Q10 14.1 10 14.925Q10 15.75 10.588 16.337Q11.175 16.925 12 16.925Q12.825 16.925 13.413 16.337Q14 15.75 14 14.925Q14 14.1 13.413 13.512Q12.825 12.925 12 12.925ZM6.3 10.225Q6.3 10.225 6.3 10.225Q6.3 10.225 6.3 10.225V19.625Q6.3 19.625 6.3 19.625Q6.3 19.625 6.3 19.625Q6.3 19.625 6.3 19.625Q6.3 19.625 6.3 19.625V10.225Q6.3 10.225 6.3 10.225Q6.3 10.225 6.3 10.225Z"/>
    </Icon>
  )
});

export default IconMaterialLockOutlinedW700;