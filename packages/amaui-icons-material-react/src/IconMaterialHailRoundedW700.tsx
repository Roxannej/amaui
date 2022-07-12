import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailRoundedW700'
      short_name='Hail'

      {...props}
    >
      <path d="M12 5.625Q11.025 5.625 10.325 4.912Q9.625 4.2 9.625 3.225Q9.625 2.225 10.325 1.537Q11.025 0.85 12 0.85Q13 0.85 13.688 1.537Q14.375 2.225 14.375 3.225Q14.375 4.2 13.688 4.912Q13 5.625 12 5.625ZM10 22.375Q9.425 22.375 9.025 21.975Q8.625 21.575 8.625 21V10.75Q8.075 11.15 7.813 11.862Q7.55 12.575 7.45 13.425Q7.375 14 6.975 14.387Q6.575 14.775 6 14.775Q5.425 14.775 5.025 14.363Q4.625 13.95 4.675 13.375Q5.025 9.925 6.95 8.275Q8.875 6.625 12 6.625Q13.95 6.625 15.1 5.725Q16.25 4.825 16.525 2.95Q16.625 2.375 17.013 2Q17.4 1.625 17.95 1.625Q18.55 1.625 18.962 2.037Q19.375 2.45 19.3 3.025Q19.05 4.975 18.1 6.462Q17.15 7.95 15.375 8.675V21Q15.375 21.575 14.975 21.975Q14.575 22.375 14 22.375Q13.425 22.375 13.025 21.975Q12.625 21.575 12.625 21V16.375H11.375V21Q11.375 21.575 10.975 21.975Q10.575 22.375 10 22.375ZM5.2 22.375Q4.55 22.375 4.088 21.913Q3.625 21.45 3.625 20.8V17.95Q3.625 17.3 4.088 16.837Q4.55 16.375 5.2 16.375H5.8Q6.45 16.375 6.912 16.837Q7.375 17.3 7.375 17.95V20.8Q7.375 21.45 6.912 21.913Q6.45 22.375 5.8 22.375Z"/>
    </Icon>
  )
});

export default IconMaterialHailRoundedW700;