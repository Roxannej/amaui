import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGridViewOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GridViewOutlinedW700'
      short_name='GridView'

      {...props}
    >
      <path d="M2.15 11V2.15H11V11ZM2.15 21.85V13H11V21.85ZM13 11V2.15H21.85V11ZM13 21.85V13H21.85V21.85ZM5.3 7.85H7.85V5.3H5.3ZM16.15 7.85H18.7V5.3H16.15ZM16.15 18.7H18.7V16.15H16.15ZM5.3 18.7H7.85V16.15H5.3ZM16.15 7.85ZM16.15 16.15ZM7.85 16.15ZM7.85 7.85Z"/>
    </Icon>
  )
});

export default IconMaterialGridViewOutlinedW700;
