import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalAtmSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalAtmSharpW700'
      short_name='LocalAtm'

      {...props}
    >
      <path d="M11 17H13V16H15V11H11V10H15V8H13V7H11V8H9V13H13V14H9V16H11ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 17.7V6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialLocalAtmSharpW700;
