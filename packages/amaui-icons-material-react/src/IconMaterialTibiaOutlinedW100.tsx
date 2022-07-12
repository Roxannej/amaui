import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaOutlinedW100'
      short_name='Tibia'

      {...props}
    >
      <path d="m10.3 8.65-2.5-2.5q-.225-.225-.362-.525-.138-.3-.138-.65 0-.7.475-1.188Q8.25 3.3 8.95 3.3h6.1q.675 0 1.138.487.462.488.462 1.188 0 .35-.137.662-.138.313-.388.563L13.7 8.625v6.625l2.475 2.5q.25.25.375.55.125.3.125.65 0 .725-.487 1.225-.488.5-1.213.5-.35 0-.65-.125-.3-.125-.55-.375-.35-.35-.812-.538-.463-.187-.963-.187-.5 0-.962.187-.463.188-.813.538-.25.25-.562.375-.313.125-.663.125-.725 0-1.212-.5-.488-.5-.513-1.225 0-.35.125-.65.125-.3.375-.55l2.525-2.475Zm.7.125v6.4q0 .2-.075.387-.075.188-.225.313L8.3 18.25q-.15.15-.225.337-.075.188-.075.388 0 .425.3.725t.725.3q.2 0 .388-.075.187-.075.337-.225.45-.45 1.025-.688.575-.237 1.225-.237.65 0 1.225.237.575.238 1.025.688.15.15.338.225.187.075.387.075.425 0 .725-.312.3-.313.3-.713 0-.2-.075-.388-.075-.187-.225-.337l-2.4-2.375q-.15-.125-.225-.313-.075-.187-.075-.387v-6.4q0-.2.075-.388.075-.187.2-.312l2.375-2.4q.15-.15.225-.338.075-.187.075-.387 0-.4-.262-.675Q15.425 4 15.025 4H8.95q-.425 0-.7.275-.275.275-.275.7 0 .2.087.388.088.187.213.312l2.425 2.4q.15.125.225.312.075.188.075.388ZM12 12Z"/>
    </Icon>
  )
});

export default IconMaterialTibiaOutlinedW100;
