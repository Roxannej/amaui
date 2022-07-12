import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaymentsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaymentsSharpW700Filled'
      short_name='Payments'

      {...props}
    >
      <path d="M14.375 12.225Q15.625 12.225 16.5 11.35Q17.375 10.475 17.375 9.225Q17.375 7.975 16.5 7.1Q15.625 6.225 14.375 6.225Q13.125 6.225 12.25 7.1Q11.375 7.975 11.375 9.225Q11.375 10.475 12.25 11.35Q13.125 12.225 14.375 12.225ZM5 16V2.475H23.775V16ZM0.225 20.775V7H3.375V17.625H20V20.775ZM7.775 7.225Q8.6 7.225 9.188 6.637Q9.775 6.05 9.775 5.225H7.775ZM21 7.225V5.225H19Q19 6.05 19.587 6.637Q20.175 7.225 21 7.225ZM19 13.225H21V11.225Q20.175 11.225 19.587 11.812Q19 12.4 19 13.225ZM7.775 13.225H9.775Q9.775 12.4 9.188 11.812Q8.6 11.225 7.775 11.225Z"/>
    </Icon>
  )
});

export default IconMaterialPaymentsSharpW700Filled;
