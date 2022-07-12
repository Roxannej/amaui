import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaOutlinedW700Filled'
      short_name='Tibia'

      {...props}
    >
      <path d="m8.25 9.5-1.9-1.9q-.525-.525-.813-1.213Q5.25 5.7 5.25 4.975q0-1.55 1.075-2.638Q7.4 1.25 8.95 1.25h6.1q1.525 0 2.587 1.087Q18.7 3.425 18.7 4.975q0 .75-.3 1.45t-.825 1.225L15.75 9.475v4.95l1.875 1.875q.525.525.813 1.212.287.688.287 1.438 0 1.575-1.087 2.675-1.088 1.1-2.663 1.1-.75 0-1.437-.287-.688-.288-1.213-.813-.05-.05-.137-.087Q12.1 21.5 12 21.5t-.188.038q-.087.037-.137.087-.525.525-1.212.813-.688.287-1.438.287-1.575 0-2.687-1.1-1.113-1.1-1.113-2.675 0-.75.288-1.438.287-.687.837-1.212l1.9-1.875Z"/>
    </Icon>
  )
});

export default IconMaterialTibiaOutlinedW700Filled;
