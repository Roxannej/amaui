import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSaveSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveSharpW700'
      short_name='Save'

      {...props}
    >
      <path d="M2.15 21.85V2.15H17.35L21.85 6.65V21.85ZM5.3 18.7H18.7V7.975L16.025 5.3H5.3ZM12 17.7Q13.25 17.7 14.125 16.825Q15 15.95 15 14.7Q15 13.45 14.125 12.575Q13.25 11.7 12 11.7Q10.75 11.7 9.875 12.575Q9 13.45 9 14.7Q9 15.95 9.875 16.825Q10.75 17.7 12 17.7ZM6.3 10.3H15.3V6.3H6.3ZM5.3 18.7V5.3V7.975V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialSaveSharpW700;
