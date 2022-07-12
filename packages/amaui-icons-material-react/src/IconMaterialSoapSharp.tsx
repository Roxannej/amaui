import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSoapSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SoapSharp'
      short_name='Soap'

      {...props}
    >
      <path d="M14.25 7.5Q14.55 7.5 14.775 7.275Q15 7.05 15 6.75Q15 6.45 14.775 6.225Q14.55 6 14.25 6Q13.95 6 13.725 6.225Q13.5 6.45 13.5 6.75Q13.5 7.05 13.725 7.275Q13.95 7.5 14.25 7.5ZM14.25 9Q13.3 9 12.65 8.35Q12 7.7 12 6.75Q12 5.8 12.65 5.15Q13.3 4.5 14.25 4.5Q15.2 4.5 15.85 5.15Q16.5 5.8 16.5 6.75Q16.5 7.7 15.85 8.35Q15.2 9 14.25 9ZM20 6.5Q20.2 6.5 20.35 6.35Q20.5 6.2 20.5 6Q20.5 5.8 20.35 5.65Q20.2 5.5 20 5.5Q19.8 5.5 19.65 5.65Q19.5 5.8 19.5 6Q19.5 6.2 19.65 6.35Q19.8 6.5 20 6.5ZM20 8Q19.175 8 18.587 7.412Q18 6.825 18 6Q18 5.175 18.587 4.588Q19.175 4 20 4Q20.825 4 21.413 4.588Q22 5.175 22 6Q22 6.825 21.413 7.412Q20.825 8 20 8ZM16.5 4Q15.875 4 15.438 3.562Q15 3.125 15 2.5Q15 1.875 15.438 1.438Q15.875 1 16.5 1Q17.125 1 17.562 1.438Q18 1.875 18 2.5Q18 3.125 17.562 3.562Q17.125 4 16.5 4ZM1 23V12.7L9.125 5L10.75 6.7L8.875 10H20V12.5H12V13.5H22V16H12V17H21V19.5H12V20.5H19V23ZM3 21H10V12H7V9.775L3 13.525ZM6.5 15.375Z"/>
    </Icon>
  )
});

export default IconMaterialSoapSharp;
