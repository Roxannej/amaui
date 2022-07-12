import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseRoundedW700'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m6.3 10.7 3.775-2.925q.85-.65 1.925-.65 1.075 0 1.925.65L17.7 10.7V6.6L12 4.475 6.3 6.6v4.1Zm3.125 7.6V16q0-.65.463-1.113.462-.462 1.112-.462h2q.65 0 1.113.462.462.463.462 1.113v2.3q.85-.9 1.5-1.913.65-1.012 1.075-2.137l-5.15-4-5.15 4q.425 1.125 1.075 2.137.65 1.013 1.5 1.913ZM12 22.775q-.225 0-.425-.038-.2-.037-.35-.087-3.55-1.175-5.812-4.425Q3.15 14.975 3.15 11.1V6.6q0-.975.563-1.788Q4.275 4 5.2 3.65l5.7-2.125q.55-.2 1.1-.2t1.1.2l5.7 2.125q.925.35 1.488 1.162.562.813.562 1.788v4.5q0 3.875-2.263 7.125-2.262 3.25-5.812 4.425-.075.025-.775.125Zm0-10.725Z"/>
    </Icon>
  )
});

export default IconMaterialShieldWithHouseRoundedW700;