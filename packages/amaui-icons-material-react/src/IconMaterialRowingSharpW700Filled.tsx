import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRowingSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingSharpW700Filled'
      short_name='Rowing'

      {...props}
    >
      <path d="M5.575 20.5 3.8 18.725 8.35 14.2 11.075 16.925H9.15ZM15 4.625Q14.075 4.625 13.438 3.987Q12.8 3.35 12.8 2.425Q12.8 1.5 13.438 0.862Q14.075 0.225 15 0.225Q15.925 0.225 16.562 0.862Q17.2 1.5 17.2 2.425Q17.2 3.35 16.562 3.987Q15.925 4.625 15 4.625ZM18.075 24 14.875 20.8V19.3L7.9 12.325Q7.625 12.375 7.388 12.4Q7.15 12.425 6.875 12.425V9.85Q8.15 9.85 9.438 9.363Q10.725 8.875 11.575 7.925L12.975 6.375Q13.325 6 13.825 5.775Q14.325 5.55 14.825 5.55Q15.875 5.55 16.575 6.238Q17.275 6.925 17.275 7.975V13.725Q17.275 14.325 17.062 14.863Q16.85 15.4 16.4 15.875L12.375 11.875V10.525Q11.975 10.85 11.562 11.113Q11.15 11.375 10.675 11.575L16.65 17.55H18.15L21.35 20.725Z"/>
    </Icon>
  )
});

export default IconMaterialRowingSharpW700Filled;
