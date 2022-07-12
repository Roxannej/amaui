import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientSharpW700'
      short_name='Gradient'

      {...props}
    >
      <path d="M11.05 12.925V11H12.95V12.925ZM9.125 14.85V12.925H11.05V14.85ZM12.95 14.85V12.925H14.875V14.85ZM14.875 12.925V11H16.8V12.925ZM7.2 12.925V11H9.125V12.925ZM2.15 21.85V2.15H21.85V21.85ZM7.2 18.7H9.125V16.775H7.2ZM11.05 18.7H12.95V16.775H11.05ZM14.875 18.7H16.8V16.775H14.875ZM5.3 16.775H7.225V14.85H9.125V16.775H11.05V14.85H12.95V16.775H14.875V14.85H16.8V16.775H18.7V14.85H16.8V12.925H18.7V5.3H5.3V12.925H7.225V14.85H5.3ZM5.3 18.7V5.3Z"/>
    </Icon>
  )
});

export default IconMaterialGradientSharpW700;
