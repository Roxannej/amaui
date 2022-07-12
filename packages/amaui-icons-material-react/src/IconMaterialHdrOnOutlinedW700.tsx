import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHdrOnOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HdrOnOutlinedW700'
      short_name='HdrOn'

      {...props}
    >
      <path d="M15.875 15.2V8.8H19.225Q20.05 8.8 20.587 9.337Q21.125 9.875 21.125 10.7V11.7Q21.125 12.175 20.913 12.487Q20.7 12.8 20.325 13.05L21.275 15.2H19.275L18.525 13.45H17.775V15.2ZM17.775 11.7H19.225Q19.225 11.7 19.225 11.7Q19.225 11.7 19.225 11.7V10.7Q19.225 10.7 19.225 10.7Q19.225 10.7 19.225 10.7H17.775ZM2.725 15.2V8.8H4.625V10.8H6.225V8.8H8.125V15.2H6.225V12.7H4.625V15.2ZM9.3 15.2V8.8H12.8Q13.625 8.8 14.163 9.337Q14.7 9.875 14.7 10.7V13.3Q14.7 14.125 14.163 14.662Q13.625 15.2 12.8 15.2ZM11.2 13.3H12.8Q12.8 13.3 12.8 13.3Q12.8 13.3 12.8 13.3V10.7Q12.8 10.7 12.8 10.7Q12.8 10.7 12.8 10.7H11.2Z"/>
    </Icon>
  )
});

export default IconMaterialHdrOnOutlinedW700;
