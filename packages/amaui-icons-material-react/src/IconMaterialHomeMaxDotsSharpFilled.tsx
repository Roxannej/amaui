import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHomeMaxDotsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeMaxDotsSharpFilled'
      short_name='HomeMaxDots'

      {...props}
    >
      <path d="M7 20v-1H5q-1.65 0-2.825-1.175Q1 16.65 1 15V9q0-1.65 1.175-2.825Q3.35 5 5 5h14q1.65 0 2.825 1.175Q23 7.35 23 9v6q0 1.65-1.175 2.825Q20.65 19 19 19h-2v1Zm3.5-7q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q10.925 11 10.5 11t-.712.287Q9.5 11.575 9.5 12t.288.712q.287.288.712.288Zm-3 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q7.925 11 7.5 11t-.713.287Q6.5 11.575 6.5 12t.287.712Q7.075 13 7.5 13Zm6 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q13.925 11 13.5 11t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288Zm3 0q.425 0 .712-.288.288-.287.288-.712t-.288-.713Q16.925 11 16.5 11t-.713.287q-.287.288-.287.713t.287.712q.288.288.713.288Z"/>
    </Icon>
  )
});

export default IconMaterialHomeMaxDotsSharpFilled;
