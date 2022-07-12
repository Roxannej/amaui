import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMusicOffRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MusicOffRoundedW700'
      short_name='MusicOff'

      {...props}
    >
      <path d="M18.7 22.025 14.525 17.875V17.925Q14.4 19.625 13.05 20.788Q11.7 21.95 10 21.95Q8.125 21.95 6.775 20.625Q5.425 19.3 5.425 17.425Q5.425 15.925 6.438 14.525Q7.45 13.125 9.5 12.85L1.975 5.3Q1.625 4.95 1.625 4.462Q1.625 3.975 1.975 3.625Q2.325 3.275 2.8 3.275Q3.275 3.275 3.625 3.625L20.375 20.375Q20.725 20.725 20.725 21.2Q20.725 21.675 20.375 22.025Q20.025 22.375 19.538 22.375Q19.05 22.375 18.7 22.025ZM14.575 11.225 11.425 8.075V5.2Q11.425 3.9 12.35 2.975Q13.275 2.05 14.575 2.05H16.575Q17.65 2.05 18.4 2.8Q19.15 3.55 19.15 4.625Q19.15 5.7 18.4 6.45Q17.65 7.2 16.575 7.2H14.575Z"/>
    </Icon>
  )
});

export default IconMaterialMusicOffRoundedW700;
