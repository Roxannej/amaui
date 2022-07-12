import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsSharpW700Filled'
      short_name='Contacts'

      {...props}
    >
      <path d="M3.225 23.775V21.775H20.775V23.775ZM3.225 2.225V0.225H20.775V2.225ZM12 13.375Q13.35 13.375 14.275 12.462Q15.2 11.55 15.2 10.2Q15.2 8.85 14.275 7.925Q13.35 7 12 7Q10.65 7 9.725 7.925Q8.8 8.85 8.8 10.2Q8.8 11.55 9.725 12.462Q10.65 13.375 12 13.375ZM1.225 20.775V3.225H22.775V20.775ZM5.375 18H18.625Q17.65 16.575 15.925 15.6Q14.2 14.625 12 14.625Q9.8 14.625 8.075 15.6Q6.35 16.575 5.375 18Z"/>
    </Icon>
  )
});

export default IconMaterialContactsSharpW700Filled;
