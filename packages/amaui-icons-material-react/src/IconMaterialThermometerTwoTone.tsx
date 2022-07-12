import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerTwoTone'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 21.55q-2.325 0-3.987-1.65-1.663-1.65-1.663-3.975 0-1.25.525-2.375t1.45-1.9V6.075q0-1.475 1.088-2.563Q10.5 2.425 12 2.425q1.5 0 2.588 1.087 1.087 1.088 1.087 2.563v5.575q.95.775 1.463 1.9.512 1.125.512 2.35 0 2.35-1.662 4-1.663 1.65-3.988 1.65Zm-.65-11.825h1.3v-3.65q0-.225-.2-.425-.2-.2-.45-.2-.225 0-.438.2-.212.2-.212.425Z"/>
    </Icon>
  )
});

export default IconMaterialThermometerTwoTone;