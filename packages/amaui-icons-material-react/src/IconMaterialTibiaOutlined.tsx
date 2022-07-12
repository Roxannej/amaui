import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTibiaOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TibiaOutlined'
      short_name='Tibia'

      {...props}
    >
      <path d="M9 9.2 6.875 7.075q-.425-.425-.65-.975Q6 5.55 6 4.975q0-1.25.85-2.113Q7.7 2 8.95 2h6.1q1.225 0 2.063.875.837.875.837 2.1 0 .6-.238 1.162-.237.563-.662.988L15 9.175v5.55l2.1 2.1q.425.425.65.975.225.55.225 1.15 0 1.275-.862 2.15-.863.875-2.138.875-.6 0-1.15-.225-.55-.225-.975-.65-.175-.175-.387-.263-.213-.087-.463-.087t-.462.087q-.213.088-.388.263-.425.425-.975.65-.55.225-1.15.225-1.275 0-2.162-.875-.888-.875-.888-2.15 0-.6.238-1.15.237-.55.662-.975L9 14.75Zm2-.425v6.4q0 .2-.087.387-.088.188-.213.313L8.3 18.25q-.15.125-.225.312Q8 18.75 8 18.95q0 .425.3.738.3.312.725.312.2 0 .388-.075.187-.075.337-.225.45-.45 1.025-.7.575-.25 1.225-.25.65 0 1.238.25.587.25 1.012.7.15.125.338.213.187.087.387.087.425 0 .738-.312.312-.313.312-.738 0-.2-.075-.388-.075-.187-.25-.312l-2.4-2.375q-.125-.15-.212-.325-.088-.175-.088-.375v-6.4q0-.2.075-.388.075-.187.2-.312l2.375-2.4q.15-.15.238-.338.087-.187.087-.387 0-.4-.275-.675T15.025 4H8.95q-.4 0-.675.287Q8 4.575 8 4.975q0 .2.075.375t.2.325l2.425 2.4q.15.125.225.312.075.188.075.388ZM12.025 12Z"/>
    </Icon>
  )
});

export default IconMaterialTibiaOutlined;