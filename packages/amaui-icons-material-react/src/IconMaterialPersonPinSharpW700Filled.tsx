import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonPinSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonPinSharpW700Filled'
      short_name='PersonPin'

      {...props}
    >
      <path d="M12 23.775 8.65 20.425H2.15V0.725H21.85V20.425H15.35ZM12 12.075Q13.55 12.075 14.625 11Q15.7 9.925 15.7 8.375Q15.7 6.825 14.625 5.762Q13.55 4.7 12 4.7Q10.45 4.7 9.375 5.762Q8.3 6.825 8.3 8.375Q8.3 9.925 9.375 11Q10.45 12.075 12 12.075ZM12 19.325 14.05 17.275H18.7V15.575Q17.35 14.375 15.713 13.75Q14.075 13.125 12 13.125Q9.925 13.125 8.288 13.775Q6.65 14.425 5.3 15.625V17.275H9.95Z"/>
    </Icon>
  )
});

export default IconMaterialPersonPinSharpW700Filled;
