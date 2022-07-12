import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandGestureTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureTwoTone'
      short_name='HandGesture'

      {...props}
    >
      <path d="M3.35 8.4 2.075 5.775 -0.525 4.5 2.075 3.225 3.35 0.6 4.625 3.225 7.25 4.5 4.625 5.775ZM20.075 22.225 18.625 19.2 15.6 17.775 18.625 16.325 20.075 13.3 21.525 16.325 24.525 17.775 21.525 19.2ZM12.375 23.525Q11.35 23.525 10.438 23.125Q9.525 22.725 8.875 21.95L2.525 14.6L4.075 13.025Q4.8 12.3 5.613 12.175Q6.425 12.05 7.225 12.575L8.725 13.575V5.1Q8.725 4 9.525 3.188Q10.325 2.375 11.425 2.375Q11.475 2.375 11.55 2.387Q11.625 2.4 11.7 2.4V2.325Q11.825 1.325 12.588 0.687Q13.35 0.05 14.3 0.05Q15 0.05 15.6 0.4Q16.2 0.75 16.55 1.3Q16.675 1.225 16.85 1.212Q17.025 1.2 17.2 1.2Q18.15 1.2 18.925 1.862Q19.7 2.525 19.8 3.475V3.55Q19.875 3.55 19.95 3.537Q20.025 3.525 20.075 3.525Q21.225 3.525 22.013 4.3Q22.8 5.075 22.8 6.225V10.275H20.65V6.225Q20.65 5.975 20.488 5.812Q20.325 5.65 20.075 5.65Q19.85 5.65 19.688 5.812Q19.525 5.975 19.525 6.225V12H17.775V3.925Q17.775 3.675 17.613 3.512Q17.45 3.35 17.2 3.35Q16.975 3.35 16.812 3.512Q16.65 3.675 16.65 3.925V12H14.875V2.775Q14.875 2.525 14.713 2.362Q14.55 2.2 14.3 2.2Q14.075 2.2 13.913 2.362Q13.75 2.525 13.75 2.775V12H12V5.1Q12 4.85 11.838 4.687Q11.675 4.525 11.425 4.525Q11.2 4.525 11.038 4.687Q10.875 4.85 10.875 5.1V17.575L6.025 14.325Q5.975 14.275 5.913 14.275Q5.85 14.275 5.775 14.35L5.45 14.7L10.5 20.55Q10.875 20.95 11.35 21.175Q11.825 21.4 12.375 21.4H17.125L18.175 23.525Z"/>
    </Icon>
  )
});

export default IconMaterialHandGestureTwoTone;
