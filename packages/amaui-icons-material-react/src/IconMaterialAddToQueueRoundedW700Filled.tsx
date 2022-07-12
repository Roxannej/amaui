import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddToQueueRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueueRoundedW700Filled'
      short_name='AddToQueue'

      {...props}
    >
      <path d="M12 15Q12.5 15 12.85 14.65Q13.2 14.3 13.2 13.8V12.2H14.8Q15.3 12.2 15.65 11.85Q16 11.5 16 11Q16 10.5 15.65 10.15Q15.3 9.8 14.8 9.8H13.2V8.2Q13.2 7.7 12.85 7.35Q12.5 7 12 7Q11.5 7 11.15 7.35Q10.8 7.7 10.8 8.2V9.8H9.2Q8.7 9.8 8.35 10.15Q8 10.5 8 11Q8 11.5 8.35 11.85Q8.7 12.2 9.2 12.2H10.8V13.8Q10.8 14.3 11.15 14.65Q11.5 15 12 15ZM9.125 22.225Q8.475 22.225 8.012 21.763Q7.55 21.3 7.55 20.65V19.85H4.3Q3 19.85 2.075 18.925Q1.15 18 1.15 16.7V5.3Q1.15 4 2.075 3.075Q3 2.15 4.3 2.15H19.7Q21 2.15 21.925 3.075Q22.85 4 22.85 5.3V16.7Q22.85 18 21.925 18.925Q21 19.85 19.7 19.85H16.45V20.65Q16.45 21.3 15.988 21.763Q15.525 22.225 14.875 22.225Z"/>
    </Icon>
  )
});

export default IconMaterialAddToQueueRoundedW700Filled;
