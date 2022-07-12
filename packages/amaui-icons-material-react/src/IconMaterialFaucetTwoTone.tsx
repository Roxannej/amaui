import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFaucetTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FaucetTwoTone'
      short_name='Faucet'

      {...props}
    >
      <path d="M1.5 16.275V13.25h4.625v-.95h-1.5q-.6 0-1.05-.45-.45-.45-.45-1.05 0-.625.45-1.075.45-.45 1.05-.45h1.5q1.225 0 2.125.9.9.9.9 2.125v.95h1.35V6.3q0-1.65 1.062-2.9 1.063-1.25 2.663-1.5 1.475-.375 2.863.287 1.387.663 2.137 2.038l.975 1.8-2.725 1.35-1-1.8q-.2-.4-.562-.637Q15.55 4.7 15.1 4.7q-.675 0-1.125.462-.45.463-.45 1.138v6.95h1.35v-.95q0-1.225.888-2.125.887-.9 2.137-.9h1.475q.625 0 1.075.45.45.45.45 1.075 0 .6-.45 1.05-.45.45-1.075.45H17.9v.95h4.625v3.025ZM6.525 21.5q-1.25 0-2.137-.887-.888-.888-.888-2.138v-1.2h17.025V19q0 1.05-.737 1.775-.738.725-1.788.725Z"/>
    </Icon>
  )
});

export default IconMaterialFaucetTwoTone;
