import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHideSourceOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HideSourceOutlined'
      short_name='HideSource'

      {...props}
    >
      <path d="M19.775 22.625 17.5 20.35Q16.275 21.15 14.888 21.575Q13.5 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 10.5 2.425 9.112Q2.85 7.725 3.65 6.5L1.375 4.225L2.8 2.8L21.2 21.2ZM12 20Q13.075 20 14.088 19.725Q15.1 19.45 16.05 18.9L5.1 7.95Q4.55 8.9 4.275 9.912Q4 10.925 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20ZM20.35 17.5 18.9 16.05Q19.45 15.1 19.725 14.087Q20 13.075 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q10.925 4 9.913 4.275Q8.9 4.55 7.95 5.1L6.5 3.65Q7.725 2.85 9.113 2.425Q10.5 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 13.5 21.575 14.887Q21.15 16.275 20.35 17.5ZM13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575Q13.425 10.575 13.425 10.575ZM10.575 13.425Q10.575 13.425 10.575 13.425Q10.575 13.425 10.575 13.425Q10.575 13.425 10.575 13.425Q10.575 13.425 10.575 13.425Q10.575 13.425 10.575 13.425Q10.575 13.425 10.575 13.425Z"/>
    </Icon>
  )
});

export default IconMaterialHideSourceOutlined;
