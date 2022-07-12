import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGroups2Outlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Groups2Outlined'
      short_name='Groups2'

      {...props}
    >
      <path d="M10.275 12q-.7 0-1.15-.525-.45-.525-.325-1.225l.3-1.8q.2-1.075 1.013-1.762Q10.925 6 12 6q1.1 0 1.913.688.812.687 1.012 1.762l.3 1.8q.125.7-.325 1.225-.45.525-1.15.525Zm.6-2h2.275l-.2-1.225q-.05-.35-.325-.563Q12.35 8 12 8t-.613.212q-.262.213-.312.563ZM3.1 12.975q-.575.025-.987-.225-.413-.25-.538-.775-.05-.225-.025-.45t.125-.425q0 .025-.025-.1-.1-.125-.162-.275-.063-.15-.088-.325-.05-.3.075-.575.125-.275.325-.475l.05-.05q.05-.475.388-.8.337-.325.837-.325.075 0 .475.1l.075-.025q.125-.125.325-.188Q4.15 8 4.375 8q.275 0 .488.087.212.088.337.263.025 0 .038.013.012.012.037.012.35.025.613.212.262.188.387.513.05.175.037.338-.012.162-.062.312 0 .025.025.1.175.175.275.387.1.213.1.438 0 .1-.15.525-.025.05 0 .1l.05.4q0 .525-.437.9-.438.375-1.063.375ZM20 13q-.825 0-1.413-.588Q18 11.825 18 11q0-.3.087-.562.088-.263.238-.513l-.7-.625q-.25-.2-.087-.5.162-.3.462-.3h2q.825 0 1.413.587Q22 9.675 22 10.5v.5q0 .825-.587 1.412Q20.825 13 20 13ZM0 18v-1.575q0-1.1 1.113-1.763Q2.225 14 4 14q.325 0 .625.012.3.013.575.063-.35.5-.525 1.075-.175.575-.175 1.225V18Zm6 0v-1.625q0-1.625 1.663-2.625 1.662-1 4.337-1 2.7 0 4.35 1 1.65 1 1.65 2.625V18Zm14-4q1.8 0 2.9.662 1.1.663 1.1 1.763V18h-4.5v-1.625q0-.65-.163-1.225-.162-.575-.487-1.075.275-.05.563-.063Q19.7 14 20 14Zm-8 .75q-1.425 0-2.55.375-1.125.375-1.325.875H15.9q-.225-.5-1.338-.875Q13.45 14.75 12 14.75ZM12 16Zm.025-7Z"/>
    </Icon>
  )
});

export default IconMaterialGroups2Outlined;
