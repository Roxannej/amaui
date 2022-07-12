import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsOutlinedW700Filled'
      short_name='Contacts'

      {...props}
    >
      <path d="M3.225 23.775V21.775H20.775V23.775ZM3.225 2.225V0.225H20.775V2.225ZM12 13.375Q13.35 13.375 14.275 12.462Q15.2 11.55 15.2 10.2Q15.2 8.85 14.275 7.925Q13.35 7 12 7Q10.65 7 9.725 7.925Q8.8 8.85 8.8 10.2Q8.8 11.55 9.725 12.462Q10.65 13.375 12 13.375ZM4.375 20.775Q3.05 20.775 2.138 19.862Q1.225 18.95 1.225 17.625V6.375Q1.225 5.05 2.138 4.137Q3.05 3.225 4.375 3.225H19.625Q20.95 3.225 21.863 4.137Q22.775 5.05 22.775 6.375V17.625Q22.775 18.95 21.863 19.862Q20.95 20.775 19.625 20.775ZM5.375 18H18.625Q17.65 16.575 15.925 15.6Q14.2 14.625 12 14.625Q9.8 14.625 8.075 15.6Q6.35 16.575 5.375 18Z"/>
    </Icon>
  )
});

export default IconMaterialContactsOutlinedW700Filled;
