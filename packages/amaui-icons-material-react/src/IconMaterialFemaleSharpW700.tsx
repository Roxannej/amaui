import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFemaleSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FemaleSharpW700'
      short_name='Female'

      {...props}
    >
      <path d="M10.425 21.925V19.925H8.425V17H10.425V15.35Q8.4 14.825 7.163 13.2Q5.925 11.575 5.925 9.5Q5.925 6.975 7.7 5.2Q9.475 3.425 12 3.425Q14.525 3.425 16.3 5.2Q18.075 6.975 18.075 9.5Q18.075 11.575 16.837 13.2Q15.6 14.825 13.575 15.35V17H15.575V19.925H13.575V21.925ZM12 12.425Q13.225 12.425 14.075 11.575Q14.925 10.725 14.925 9.5Q14.925 8.275 14.075 7.425Q13.225 6.575 12 6.575Q10.775 6.575 9.925 7.425Q9.075 8.275 9.075 9.5Q9.075 10.725 9.925 11.575Q10.775 12.425 12 12.425Z"/>
    </Icon>
  )
});

export default IconMaterialFemaleSharpW700;
