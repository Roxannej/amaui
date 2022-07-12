import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterHeaterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeaterRounded'
      short_name='WaterHeater'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V6q0-1.65 1.175-2.825Q6.35 2 8 2h8q1.65 0 2.825 1.175Q20 4.35 20 6v14q0 .825-.587 1.413Q18.825 22 18 22Zm0-4v2h12v-2q-.75 0-1.2.5-.45.5-1.8.5t-1.762-.5Q12.825 18 12 18t-1.237.5Q10.35 19 9 19q-1.35 0-1.762-.5Q6.825 18 6 18Zm3-1q.825 0 1.238-.5Q10.65 16 12 16t1.8.5q.45.5 1.2.5t1.2-.5q.45-.5 1.8-.5V6q0-.825-.587-1.412Q16.825 4 16 4H8q-.825 0-1.412.588Q6 5.175 6 6v10q1.35 0 1.763.5.412.5 1.237.5Zm3.125-2.05q-1.65 0-2.875-1.088-1.225-1.087-1.225-2.787 0-.575.163-1.188.162-.612.587-1.212.075-.125.213-.2.137-.075.312-.075.1 0 .15.062.05.063.05.138-.025.15-.037.287-.013.138-.013.263 0 .75.313 1.312.312.563.562.563.15 0 .213-.1.062-.1.062-.225t-.05-.288L10.425 10q-.05-.2-.1-.488-.05-.287-.05-.662 0-1.35.612-2.313.613-.962 1.738-1.462.1-.05.138-.063Q12.8 5 12.875 5q.075 0 .113.05.037.05.012.125-.1.275-.137.487-.038.213-.038.488 0 .8.438 1.425.437.625 1.162 1.125.775.525 1.125 1.288.35.762.35 1.562 0 1.275-1 2.337-1 1.063-2.775 1.063Zm.125-1.675q.7 0 1.175-.5.475-.5.475-1.175 0-.4-.212-.713-.213-.312-.513-.562-.3-.25-.5-.5t-.3-.525q-.25.225-.3.512-.05.288.025.688.05.275.075.512.025.238.025.438 0 .5-.325.9t-.775.475q.2.2.538.325.337.125.612.125ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialWaterHeaterRounded;
