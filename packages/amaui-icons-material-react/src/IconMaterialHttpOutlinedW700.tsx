import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHttpOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HttpOutlinedW700'
      short_name='Http'

      {...props}
    >
      <path d="M0.55 15.2V8.8H2.425V10.8H4.05V8.8H5.925V15.2H4.05V12.7H2.425V15.2ZM8.125 15.2V10.7H6.45V8.8H11.7V10.7H10.025V15.2ZM13.975 15.2V10.7H12.3V8.8H17.55V10.7H15.875V15.2ZM18.075 15.2V8.8H21.775Q22.475 8.8 22.963 9.3Q23.45 9.8 23.45 10.5V11.875Q23.45 12.575 22.963 13.075Q22.475 13.575 21.775 13.575H19.95V15.2ZM19.95 11.7H21.575Q21.575 11.7 21.575 11.7Q21.575 11.7 21.575 11.7V10.7Q21.575 10.7 21.575 10.7Q21.575 10.7 21.575 10.7H19.95Z"/>
    </Icon>
  )
});

export default IconMaterialHttpOutlinedW700;
