import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyHeatTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHeatTwoTone'
      short_name='EmergencyHeat'

      {...props}
    >
      <path d="M20.775 6.35q-.6 0-1.05-.45-.45-.45-.45-1.05v-3q0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075v3q0 .6-.45 1.05-.45.45-1.075.45Zm0 4.15q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.625.45-1.075.45-.45 1.05-.45.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45ZM10 23.275q-3.55 0-5.912-2.362Q1.725 18.55 1.725 15q0-1.975.725-3.6t2.625-3.575q1.425-1.5 2.087-3.238.663-1.737.313-4.312 5.575 3.25 8.2 6.9 2.625 3.65 2.625 7.775 0 3.475-2.412 5.9-2.413 2.425-5.888 2.425Zm.025-3.025q.35 0 .675-.3.325-.3.325-.9 0-.45-.237-1.325-.238-.875-.788-1.875-.5 1-.725 1.862-.225.863-.225 1.338 0 .625.313.912.312.288.662.288ZM6.2 18.725Q6 17.55 6.75 15.8q.75-1.75 2.15-3.45.225-.25.513-.375.287-.125.587-.125.325 0 .613.112.287.113.487.363 1.325 1.55 2.125 3.25t.5 3.1q.625-.6 1.087-1.588.463-.987.463-2.087 0-1.4-.375-2.688-.375-1.287-1.088-2.462-.712-1.175-1.699-2.238Q11.125 6.55 9.9 5.6q-.45 1.45-1.175 2.537-.725 1.088-1.6 1.888-1.225 1.175-1.8 2.35T4.75 15q0 1.175.4 2.163.4.987 1.05 1.562Z"/>
    </Icon>
  )
});

export default IconMaterialEmergencyHeatTwoTone;
