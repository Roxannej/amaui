import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHandGestureSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HandGestureSharp'
      short_name='HandGesture'

      {...props}
    >
      <path d="M4.5 9 3.35 6.65 1 5.5 3.35 4.35 4.5 2 5.65 4.35 8 5.5 5.65 6.65ZM19 21 17.7 18.3 15 17 17.7 15.7 19 13 20.3 15.7 23 17 20.3 18.3ZM12.325 22Q11.45 22 10.663 21.637Q9.875 21.275 9.3 20.625L4 14.5L5.35 13.15Q5.85 12.65 6.55 12.575Q7.25 12.5 7.85 12.9L9.5 14V6Q9.5 5.175 10.088 4.588Q10.675 4 11.5 4Q11.625 4 11.75 4.012Q11.875 4.025 12 4.075V4Q12 3.175 12.588 2.587Q13.175 2 14 2Q14.6 2 15.075 2.312Q15.55 2.625 15.8 3.125Q15.975 3.075 16.138 3.037Q16.3 3 16.5 3Q17.325 3 17.913 3.587Q18.5 4.175 18.5 5V5.075Q18.625 5.025 18.75 5.012Q18.875 5 19 5Q19.825 5 20.413 5.588Q21 6.175 21 7V10.5H19.5V7Q19.5 6.8 19.35 6.65Q19.2 6.5 19 6.5Q18.8 6.5 18.65 6.65Q18.5 6.8 18.5 7V12H17V5Q17 4.8 16.85 4.65Q16.7 4.5 16.5 4.5Q16.3 4.5 16.15 4.65Q16 4.8 16 5V12H14.5V4Q14.5 3.8 14.35 3.65Q14.2 3.5 14 3.5Q13.8 3.5 13.65 3.65Q13.5 3.8 13.5 4V12H12V6Q12 5.8 11.85 5.662Q11.7 5.525 11.5 5.525Q11.3 5.525 11.15 5.675Q11 5.825 11 6.025V16.825L7.025 14.175Q6.825 14.05 6.65 14.1Q6.475 14.15 6.4 14.225L6.05 14.575L10.45 19.65Q10.8 20.075 11.288 20.288Q11.775 20.5 12.325 20.5H15.75L16.5 22Z"/>
    </Icon>
  )
});

export default IconMaterialHandGestureSharp;
