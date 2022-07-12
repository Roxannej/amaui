import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLinkRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkRoundedW700'
      short_name='Link'

      {...props}
    >
      <path d="M7 17.85Q4.575 17.85 2.863 16.137Q1.15 14.425 1.15 12Q1.15 9.575 2.863 7.862Q4.575 6.15 7 6.15H9.05Q9.7 6.15 10.163 6.612Q10.625 7.075 10.625 7.725Q10.625 8.375 10.163 8.837Q9.7 9.3 9.05 9.3H7Q5.875 9.3 5.088 10.087Q4.3 10.875 4.3 12Q4.3 13.125 5.088 13.912Q5.875 14.7 7 14.7H9.05Q9.7 14.7 10.163 15.162Q10.625 15.625 10.625 16.275Q10.625 16.925 10.163 17.388Q9.7 17.85 9.05 17.85ZM8.625 13.2Q8.125 13.2 7.775 12.85Q7.425 12.5 7.425 12Q7.425 11.5 7.775 11.15Q8.125 10.8 8.625 10.8H15.375Q15.875 10.8 16.225 11.15Q16.575 11.5 16.575 12Q16.575 12.5 16.225 12.85Q15.875 13.2 15.375 13.2ZM14.95 17.85Q14.3 17.85 13.838 17.388Q13.375 16.925 13.375 16.275Q13.375 15.625 13.838 15.162Q14.3 14.7 14.95 14.7H17Q18.125 14.7 18.913 13.912Q19.7 13.125 19.7 12Q19.7 10.875 18.913 10.087Q18.125 9.3 17 9.3H14.95Q14.3 9.3 13.838 8.837Q13.375 8.375 13.375 7.725Q13.375 7.075 13.838 6.612Q14.3 6.15 14.95 6.15H17Q19.425 6.15 21.138 7.862Q22.85 9.575 22.85 12Q22.85 14.425 21.138 16.137Q19.425 17.85 17 17.85Z"/>
    </Icon>
  )
});

export default IconMaterialLinkRoundedW700;
