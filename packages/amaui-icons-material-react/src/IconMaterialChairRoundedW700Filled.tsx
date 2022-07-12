import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairRoundedW700Filled'
      short_name='Chair'

      {...props}
    >
      <path d="M7 13V11Q7 9.575 6.075 8.137Q5.15 6.7 3.225 6.7V6Q3.225 4.425 4.325 3.325Q5.425 2.225 7 2.225H17Q18.575 2.225 19.675 3.325Q20.775 4.425 20.775 6V6.7Q18.825 6.925 17.913 8.25Q17 9.575 17 11V13ZM5.575 22.725Q4.925 22.725 4.463 22.263Q4 21.8 4 21.15V19.775Q2.425 19.775 1.325 18.675Q0.225 17.575 0.225 16V11Q0.225 9.95 0.9 9.287Q1.575 8.625 2.625 8.625Q3.675 8.625 4.338 9.287Q5 9.95 5 11V15H19V11Q19 9.95 19.663 9.287Q20.325 8.625 21.375 8.625Q22.425 8.625 23.1 9.287Q23.775 9.95 23.775 11V16Q23.775 17.575 22.675 18.675Q21.575 19.775 20 19.775V21.15Q20 21.8 19.538 22.263Q19.075 22.725 18.425 22.725Q17.775 22.725 17.312 22.263Q16.85 21.8 16.85 21.15V19.775H7.15V21.15Q7.15 21.8 6.688 22.263Q6.225 22.725 5.575 22.725Z"/>
    </Icon>
  )
});

export default IconMaterialChairRoundedW700Filled;