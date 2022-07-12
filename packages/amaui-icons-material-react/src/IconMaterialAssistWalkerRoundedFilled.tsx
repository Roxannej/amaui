import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssistWalkerRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistWalkerRoundedFilled'
      short_name='AssistWalker'

      {...props}
    >
      <path d="M12.5 7.5q-.825 0-1.412-.588Q10.5 6.325 10.5 5.5t.588-1.413Q11.675 3.5 12.5 3.5t1.413.587q.587.588.587 1.413 0 .825-.587 1.412-.588.588-1.413.588ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-4.25l-.775-.7.075.525q.05.4-.05.775t-.35.7l-2.575 3.3q-.25.325-.662.375-.413.05-.738-.225t-.375-.675q-.05-.4.225-.725L5.3 15.85l-1.425-2.8q-.2-.425-.225-1.062-.025-.638.425-1.088l3.35-3.3q.3-.3.663-.45Q8.45 7 8.825 7q.6 0 .95.225t.475.35l2 1.975q.675.675 1.65 1.063.975.387 2.1.387h1.65q.575 0 1 .387.425.388.475.963l.65 6.35q.325.2.525.537.2.338.2.763 0 .625-.438 1.062-.437.438-1.062.438t-1.075-.438q-.45-.437-.45-1.062 0-.425.2-.763.2-.337.55-.537l-.125-1.2h-3.25l-.275 2.825q-.05.275-.263.475-.212.2-.487.2-.35 0-.575-.238-.225-.237-.175-.587l.775-7.45q-1.425-.375-2.15-.987-.725-.613-1.45-1.338l-2.375 2.35 1.55 1.55q.275.275.425.638.15.362.15.762V20q0 .425-.287.712Q9.425 21 9 21Zm6-5h2.95l-.35-3.5h-2.225Z"/>
    </Icon>
  )
});

export default IconMaterialAssistWalkerRoundedFilled;
