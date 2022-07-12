import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWatchOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchOutlinedW100'
      short_name='Watch'

      {...props}
    >
      <path d="M9.95 19.65 9.2 16.95Q7.925 16.275 7.113 14.95Q6.3 13.625 6.3 12Q6.3 10.375 7.113 9.05Q7.925 7.725 9.2 7.05L9.95 4.35H14.05L14.8 7.05Q16.075 7.725 16.887 9.05Q17.7 10.375 17.7 12Q17.7 13.625 16.887 14.95Q16.075 16.275 14.8 16.95L14.05 19.65ZM12 17Q14.075 17 15.538 15.537Q17 14.075 17 12Q17 9.925 15.538 8.462Q14.075 7 12 7Q9.925 7 8.463 8.462Q7 9.925 7 12Q7 14.075 8.463 15.537Q9.925 17 12 17ZM10.05 6.65Q11.1 6.3 12 6.3Q12.9 6.3 13.95 6.65L13.5 5.05H10.5ZM10.5 18.95H13.5L13.95 17.35Q12.9 17.7 12 17.7Q11.1 17.7 10.05 17.35ZM10.05 5.05H10.5H13.5H13.95Q12.9 5.05 12 5.05Q11.1 5.05 10.05 5.05ZM10.5 18.95H10.05Q11.1 18.95 12 18.95Q12.9 18.95 13.95 18.95H13.5Z"/>
    </Icon>
  )
});

export default IconMaterialWatchOutlinedW100;
