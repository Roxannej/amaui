import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArmingCountdownTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArmingCountdownTwoTone'
      short_name='ArmingCountdown'

      {...props}
    >
      <path d="M12 16.05q1.9 0 3.238-1.312 1.337-1.313 1.337-3.188 0-1.8-1.075-3.163-1.075-1.362-2.775-1.287-.325 0-.562.225-.238.225-.238.55 0 .325.2.537.2.213.55.213 1.05 0 1.663.9.612.9.612 2.025 0 1.225-.862 2.05-.863.825-2.088.825-.6 0-1.162-.263-.563-.262-1.013-.712-.225-.25-.55-.325-.325-.075-.6.1-.325.175-.35.537-.025.363.225.638.625.8 1.525 1.225.9.425 1.925.425Zm-1.575-7.325q.325 0 .575-.237.25-.238.25-.563 0-.325-.25-.575-.25-.25-.575-.25-.325 0-.562.25-.238.25-.238.575 0 .325.238.563.237.237.562.237ZM8.8 10.3q.325 0 .575-.238.25-.237.25-.562 0-.325-.25-.575-.25-.25-.575-.25-.325 0-.562.25Q8 9.175 8 9.5q0 .325.238.562.237.238.562.238Zm-.625 2.25q.325 0 .575-.238.25-.237.25-.562 0-.325-.25-.575-.25-.25-.575-.25-.325 0-.562.25-.238.25-.238.575 0 .325.238.562.237.238.562.238ZM12 22.525q-.225 0-.412-.05-.188-.05-.338-.075-3.475-1.15-5.675-4.338-2.2-3.187-2.2-6.962V6.675q0-.925.538-1.713.537-.787 1.437-1.112l5.6-2.1q.525-.2 1.05-.2t1.075.2l5.6 2.1q.875.325 1.412 1.112.538.788.538 1.713V11.1q0 3.775-2.2 6.962-2.2 3.188-5.675 4.338l-.75.125Z"/>
    </Icon>
  )
});

export default IconMaterialArmingCountdownTwoTone;
