import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBlockOutlined = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlockOutlined'
      short_name='Block'

      {...props}
    >
      <path d="M4 12Q4 13.35 4.438 14.6Q4.875 15.85 5.7 16.9L16.9 5.7Q15.85 4.875 14.6 4.438Q13.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12ZM7.1 18.3Q8.15 19.125 9.4 19.562Q10.65 20 12 20Q15.35 20 17.675 17.675Q20 15.35 20 12Q20 10.65 19.562 9.4Q19.125 8.15 18.3 7.1ZM2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Z"/>
    </Icon>
  )
});

export default IconMaterialBlockOutlined;
