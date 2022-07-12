import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCopyrightOutlinedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CopyrightOutlinedW700Filled'
      short_name='Copyright'

      {...props}
    >
      <path d="M12 22.85Q9.725 22.85 7.75 22Q5.775 21.15 4.312 19.688Q2.85 18.225 2 16.25Q1.15 14.275 1.15 12Q1.15 9.725 2 7.75Q2.85 5.775 4.312 4.312Q5.775 2.85 7.75 2Q9.725 1.15 12 1.15Q14.275 1.15 16.25 2Q18.225 2.85 19.688 4.312Q21.15 5.775 22 7.75Q22.85 9.725 22.85 12Q22.85 14.275 22 16.25Q21.15 18.225 19.688 19.688Q18.225 21.15 16.25 22Q14.275 22.85 12 22.85ZM9.8 16.375H14.075Q14.725 16.375 15.15 16Q15.575 15.625 15.575 15.05V12.775H12.8V13.625H11.2V10.375H12.8V11.225H15.575V8.925Q15.575 8.35 15.15 7.987Q14.725 7.625 14.075 7.625H9.8Q9.225 7.625 8.825 8.025Q8.425 8.425 8.425 9V15Q8.425 15.575 8.825 15.975Q9.225 16.375 9.8 16.375Z"/>
    </Icon>
  )
});

export default IconMaterialCopyrightOutlinedW700Filled;