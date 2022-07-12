import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAodTabletTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodTabletTwoTone'
      short_name='AodTablet'

      {...props}
    >
      <path d="M8.75 12q-.525 0-.888-.363-.362-.362-.362-.887t.362-.9q.363-.375.888-.375h6.5q.525 0 .9.375t.375.9q0 .525-.375.887-.375.363-.9.363Zm1 3q-.525 0-.887-.363-.363-.362-.363-.887t.363-.9q.362-.375.887-.375h4.5q.525 0 .9.375t.375.9q0 .525-.375.887-.375.363-.9.363ZM3.5 20.625q-1.25 0-2.137-.887Q.475 18.85.475 17.6V6.4q0-1.25.888-2.138.887-.887 2.137-.887h17q1.25 0 2.138.887.887.888.887 2.138v11.2q0 1.25-.887 2.138-.888.887-2.138.887ZM6.425 17.6h11.15V6.4H6.425Z"/>
    </Icon>
  )
});

export default IconMaterialAodTabletTwoTone;
