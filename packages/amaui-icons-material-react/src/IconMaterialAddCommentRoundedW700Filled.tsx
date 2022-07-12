import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCommentRoundedW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCommentRoundedW700Filled'
      short_name='AddComment'

      {...props}
    >
      <path d="M12 14.2Q12.5 14.2 12.85 13.85Q13.2 13.5 13.2 13V11.2H15Q15.5 11.2 15.85 10.85Q16.2 10.5 16.2 10Q16.2 9.5 15.85 9.15Q15.5 8.8 15 8.8H13.2V7Q13.2 6.5 12.85 6.15Q12.5 5.8 12 5.8Q11.5 5.8 11.15 6.15Q10.8 6.5 10.8 7V8.8H9Q8.5 8.8 8.15 9.15Q7.8 9.5 7.8 10Q7.8 10.5 8.15 10.85Q8.5 11.2 9 11.2H10.8V13Q10.8 13.5 11.15 13.85Q11.5 14.2 12 14.2ZM1.15 19.05V4.3Q1.15 2.975 2.062 2.062Q2.975 1.15 4.3 1.15H19.7Q21.025 1.15 21.938 2.062Q22.85 2.975 22.85 4.3V15.7Q22.85 17.025 21.938 17.938Q21.025 18.85 19.7 18.85H5.15L3.825 20.175Q3.075 20.925 2.113 20.513Q1.15 20.1 1.15 19.05Z"/>
    </Icon>
  )
});

export default IconMaterialAddCommentRoundedW700Filled;
