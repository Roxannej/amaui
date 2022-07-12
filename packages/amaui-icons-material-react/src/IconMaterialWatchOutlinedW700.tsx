import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOutlinedW700'
      short_name='Watch'

      {...props}
    >
      <path d="M8.7 23.525 7.075 18.1Q5.8 17.05 4.975 15.463Q4.15 13.875 4.15 12Q4.15 10.125 4.975 8.537Q5.8 6.95 7.075 5.9L8.7 0.475H15.3L16.925 5.9Q18.2 6.95 19.025 8.537Q19.85 10.125 19.85 12Q19.85 13.875 19.025 15.463Q18.2 17.05 16.925 18.1L15.3 23.525ZM12 16.7Q13.95 16.7 15.325 15.325Q16.7 13.95 16.7 12Q16.7 10.05 15.325 8.675Q13.95 7.3 12 7.3Q10.05 7.3 8.675 8.675Q7.3 10.05 7.3 12Q7.3 13.95 8.675 15.325Q10.05 16.7 12 16.7ZM10.4 4.325Q11.1 4.15 12 4.15Q12.9 4.15 13.6 4.325L13.225 3.225H10.775ZM10.775 20.775H13.225L13.6 19.675Q12.9 19.85 12 19.85Q11.1 19.85 10.4 19.675ZM10.4 3.225H10.775H13.225H13.6Q12.9 3.225 12 3.225Q11.1 3.225 10.4 3.225ZM10.775 20.775H10.4Q11.1 20.775 12 20.775Q12.9 20.775 13.6 20.775H13.225Z"/>
    </Icon>
  )
});

export default IconMaterialWatchOutlinedW700;