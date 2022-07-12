import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseRoundedW700Filled'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m6.875 14.25 5.125-4 5.125 4q.275-.725.425-1.525.15-.8.15-1.625v-.4l-3.775-2.925q-.85-.65-1.925-.65-1.075 0-1.925.65L6.3 10.7v.4q0 .825.15 1.625t.425 1.525ZM12 19.625q.7-.275 1.35-.7Q14 18.5 14.575 18v-2q0-.65-.462-1.113-.463-.462-1.113-.462h-2q-.65 0-1.112.462-.463.463-.463 1.113v2q.575.5 1.225.925.65.425 1.35.7Zm0 3.15q-.225 0-.425-.038-.2-.037-.35-.087-3.55-1.175-5.812-4.425Q3.15 14.975 3.15 11.1V6.6q0-.975.563-1.788Q4.275 4 5.2 3.65l5.7-2.125q.55-.2 1.1-.2t1.1.2l5.7 2.125q.925.35 1.488 1.162.562.813.562 1.788v4.5q0 3.875-2.263 7.125-2.262 3.25-5.812 4.425-.075.025-.775.125Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseRoundedW700Filled;
