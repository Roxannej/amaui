import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOffRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOffRoundedW700'
      short_name='FlashOff'

      {...props}
    >
      <path d="M16.425 11.925 13.975 9.475H15.125Q16.1 9.475 16.525 10.275Q16.95 11.075 16.5 11.8ZM13.825 9.325 6.55 2.05V1.775Q6.65 1.2 7.062 0.837Q7.475 0.475 8.075 0.475H15.325Q16.2 0.475 16.663 1.187Q17.125 1.9 16.775 2.675ZM19.4 21.575 13.95 16.15 11 21.2Q10.7 21.75 10.1 21.575Q9.5 21.4 9.5 20.775V13.475H8.075Q7.425 13.475 6.963 13.012Q6.5 12.55 6.5 11.9V8.7L1.775 3.95Q1.425 3.6 1.425 3.125Q1.425 2.65 1.775 2.3Q2.125 1.95 2.612 1.95Q3.1 1.95 3.45 2.3L21.05 19.9Q21.4 20.25 21.4 20.738Q21.4 21.225 21.05 21.575Q20.7 21.925 20.225 21.925Q19.75 21.925 19.4 21.575Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOffRoundedW700;
