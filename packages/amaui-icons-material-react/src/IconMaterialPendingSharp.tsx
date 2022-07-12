import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPendingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingSharp'
      short_name='Pending'

      {...props}
    >
      <path d="M7 13.5Q7.625 13.5 8.062 13.062Q8.5 12.625 8.5 12Q8.5 11.375 8.062 10.938Q7.625 10.5 7 10.5Q6.375 10.5 5.938 10.938Q5.5 11.375 5.5 12Q5.5 12.625 5.938 13.062Q6.375 13.5 7 13.5ZM12 13.5Q12.625 13.5 13.062 13.062Q13.5 12.625 13.5 12Q13.5 11.375 13.062 10.938Q12.625 10.5 12 10.5Q11.375 10.5 10.938 10.938Q10.5 11.375 10.5 12Q10.5 12.625 10.938 13.062Q11.375 13.5 12 13.5ZM17 13.5Q17.625 13.5 18.062 13.062Q18.5 12.625 18.5 12Q18.5 11.375 18.062 10.938Q17.625 10.5 17 10.5Q16.375 10.5 15.938 10.938Q15.5 11.375 15.5 12Q15.5 12.625 15.938 13.062Q16.375 13.5 17 13.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialPendingSharp;
