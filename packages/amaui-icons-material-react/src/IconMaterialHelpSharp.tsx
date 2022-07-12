import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHelpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HelpSharp'
      short_name='Help'

      {...props}
    >
      <path d="M11.95 18Q12.475 18 12.838 17.637Q13.2 17.275 13.2 16.75Q13.2 16.225 12.838 15.863Q12.475 15.5 11.95 15.5Q11.425 15.5 11.062 15.863Q10.7 16.225 10.7 16.75Q10.7 17.275 11.062 17.637Q11.425 18 11.95 18ZM11.05 14.15H12.9Q12.9 13.325 13.088 12.85Q13.275 12.375 14.15 11.55Q14.8 10.9 15.175 10.312Q15.55 9.725 15.55 8.9Q15.55 7.5 14.525 6.75Q13.5 6 12.1 6Q10.675 6 9.788 6.75Q8.9 7.5 8.55 8.55L10.2 9.2Q10.325 8.75 10.763 8.225Q11.2 7.7 12.1 7.7Q12.9 7.7 13.3 8.137Q13.7 8.575 13.7 9.1Q13.7 9.6 13.4 10.037Q13.1 10.475 12.65 10.85Q11.55 11.825 11.3 12.325Q11.05 12.825 11.05 14.15ZM12 22Q9.95 22 8.125 21.212Q6.3 20.425 4.938 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.938 4.925Q6.3 3.575 8.125 2.787Q9.95 2 12 2Q14.1 2 15.925 2.787Q17.75 3.575 19.1 4.925Q20.45 6.275 21.225 8.1Q22 9.925 22 12Q22 14.075 21.225 15.9Q20.45 17.725 19.1 19.075Q17.75 20.425 15.925 21.212Q14.1 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.35 20 17.675 17.663Q20 15.325 20 12Q20 8.675 17.675 6.337Q15.35 4 12 4Q8.725 4 6.362 6.337Q4 8.675 4 12Q4 15.325 6.362 17.663Q8.725 20 12 20Z"/>
    </Icon>
  )
});

export default IconMaterialHelpSharp;
