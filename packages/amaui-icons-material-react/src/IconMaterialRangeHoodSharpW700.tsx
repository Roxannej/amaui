import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRangeHoodSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RangeHoodSharpW700'
      short_name='RangeHood'

      {...props}
    >
      <path d="M4.375 20.775q-1.3 0-2.225-.925t-.925-2.225v-4.35q0-.525.225-1.025.225-.5.625-.925l4.15-4.375V2.225h11.55V6.95l4.125 4.325q.425.425.65.987.225.563.225 1.188v4.175q0 1.3-.925 2.225t-2.225.925Zm2.875-10.3h9.525l-2.15-2.25v-2.85h-5.25v2.85Zm-2.875 7.15h15.25v-4H4.375v4Zm4.1-1.075v-1.875h7.05v1.875Z"/>
    </Icon>
  )
});

export default IconMaterialRangeHoodSharpW700;
