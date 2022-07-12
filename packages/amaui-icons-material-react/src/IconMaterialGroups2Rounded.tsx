import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroups2Rounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups2Rounded'
      short_name='Groups2'

      {...props}
    >
      <path d="M10.275 12q-.7 0-1.15-.525-.45-.525-.325-1.225l.3-1.8q.2-1.075 1.013-1.762Q10.925 6 12 6q1.1 0 1.913.688.812.687 1.012 1.762l.3 1.8q.125.7-.325 1.225-.45.525-1.15.525Zm.6-2h2.275l-.2-1.225q-.05-.35-.325-.563Q12.35 8 12 8t-.613.212q-.262.213-.312.563ZM3.1 12.975q-.575.025-.987-.225-.413-.25-.538-.775-.05-.225-.025-.45t.125-.425q0 .025-.025-.1-.1-.125-.162-.275-.063-.15-.088-.325-.05-.3.075-.575.125-.275.325-.475l.05-.05q.05-.475.388-.8.337-.325.837-.325.075 0 .475.1l.075-.025q.125-.125.325-.188Q4.15 8 4.375 8q.275 0 .488.087.212.088.337.263.025 0 .038.013.012.012.037.012.35.025.613.212.262.188.387.513.05.175.037.338-.012.162-.062.312 0 .025.025.1.175.175.275.387.1.213.1.438 0 .1-.15.525-.025.05 0 .1l.05.4q0 .525-.437.9-.438.375-1.063.375ZM20 13q-.825 0-1.413-.588Q18 11.825 18 11q0-.3.087-.562.088-.263.238-.513l-.7-.625q-.25-.2-.087-.5.162-.3.462-.3h2q.825 0 1.413.587Q22 9.675 22 10.5v.5q0 .825-.587 1.412Q20.825 13 20 13Zm-7.975-4ZM1 18q-.425 0-.712-.288Q0 17.425 0 17v-.575q0-1.1 1.1-1.763Q2.2 14 4 14q.325 0 .613.025.287.025.562.075-.35.5-.513 1.075Q4.5 15.75 4.5 16.4V18Zm6 0q-.425 0-.713-.288Q6 17.425 6 17v-.6q0-1.625 1.663-2.638Q9.325 12.75 12 12.75q2.7 0 4.35 1.012Q18 14.775 18 16.4v.6q0 .425-.288.712Q17.425 18 17 18Zm12.5 0v-1.6q0-.65-.175-1.225-.175-.575-.5-1.075.275-.05.563-.075Q19.675 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V17q0 .425-.288.712Q23.425 18 23 18ZM12 14.75q-1.425 0-2.55.387-1.125.388-1.325.863h7.75q-.225-.5-1.337-.875-1.113-.375-2.538-.375ZM12 16Z"/>
    </Icon>
  )
});

export default IconMaterialGroups2Rounded;