import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharpW700'
      short_name='Payments'

      {...props}
    >
      <path d="M14.375 12.225Q13.125 12.225 12.25 11.35Q11.375 10.475 11.375 9.225Q11.375 7.975 12.25 7.1Q13.125 6.225 14.375 6.225Q15.625 6.225 16.5 7.1Q17.375 7.975 17.375 9.225Q17.375 10.475 16.5 11.35Q15.625 12.225 14.375 12.225ZM5 16V2.475H23.775V16ZM9.775 13.225H19Q19 12.4 19.587 11.812Q20.175 11.225 21 11.225V7.225Q20.175 7.225 19.587 6.637Q19 6.05 19 5.225H9.775Q9.775 6.05 9.188 6.637Q8.6 7.225 7.775 7.225V11.225Q8.6 11.225 9.188 11.812Q9.775 12.4 9.775 13.225ZM0.225 20.775V7H3.375V17.625H20V20.775ZM7.775 13.225V5.225Z"/>
    </Icon>
  )
});

export default IconMaterialPaymentsSharpW700;
