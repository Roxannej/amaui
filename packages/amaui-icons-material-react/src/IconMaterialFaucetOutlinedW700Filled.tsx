import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFaucetOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetOutlinedW700Filled'
      short_name='Faucet'

      {...props}
    >
      <path d="M1.425 16.35V13.2H6.05v-.825H4.625q-.65 0-1.112-.463-.463-.462-.463-1.112 0-.65.463-1.112.462-.463 1.112-.463H6.05q1.3 0 2.225.925t.925 2.225v.825h1.225V6.3q0-1.95 1.375-3.313 1.375-1.362 3.325-1.362 1.3 0 2.4.712 1.1.713 1.75 1.863l1 1.85-2.825 1.425L16.425 5.6q-.2-.375-.55-.6-.35-.225-.775-.225-.65 0-1.087.437-.438.438-.438 1.088v6.9H14.8v-.825q0-1.3.925-2.225t2.225-.925h1.425q.65 0 1.113.463.462.462.462 1.112 0 .65-.462 1.112-.463.463-1.113.463H17.95v.825h4.625v3.15Zm5.15 5.225q-1.3 0-2.225-.925t-.925-2.225V17.35h17.15V19q0 1.075-.75 1.825t-1.825.75Z"/>
    </Icon>
  )
});

export default IconMaterialFaucetOutlinedW700Filled;