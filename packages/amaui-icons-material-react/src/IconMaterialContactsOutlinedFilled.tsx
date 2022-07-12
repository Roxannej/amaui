import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContactsOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactsOutlinedFilled'
      short_name='Contacts'

      {...props}
    >
      <path d="M4 23V21H20V23ZM4 3V1H20V3ZM12 13Q13.25 13 14.125 12.125Q15 11.25 15 10Q15 8.75 14.125 7.875Q13.25 7 12 7Q10.75 7 9.875 7.875Q9 8.75 9 10Q9 11.25 9.875 12.125Q10.75 13 12 13ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM5.75 18H18.25Q17.125 16.6 15.525 15.8Q13.925 15 12 15Q10.075 15 8.475 15.8Q6.875 16.6 5.75 18Z"/>
    </Icon>
  )
});

export default IconMaterialContactsOutlinedFilled;
