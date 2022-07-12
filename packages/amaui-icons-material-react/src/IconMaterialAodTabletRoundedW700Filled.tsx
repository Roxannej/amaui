import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletRoundedW700Filled'
      short_name='AodTablet'

      {...props}
    >
      <path d="M8.75 12.075q-.55 0-.937-.387-.388-.388-.388-.938 0-.55.388-.938.387-.387.937-.387h6.5q.55 0 .938.387.387.388.387.938 0 .55-.387.938-.388.387-.938.387Zm1 3q-.55 0-.938-.387-.387-.388-.387-.938 0-.55.387-.938.388-.387.938-.387h4.5q.55 0 .938.387.387.388.387.938 0 .55-.387.938-.388.387-.938.387ZM3.375 20.85q-1.3 0-2.225-.925T.225 17.7V6.3q0-1.3.925-2.225t2.225-.925h17.25q1.3 0 2.225.925t.925 2.225v11.4q0 1.3-.925 2.225t-2.225.925Zm3-3.15h11.25V6.3H6.375Z"/>
    </Icon>
  )
});

export default IconMaterialAodTabletRoundedW700Filled;
