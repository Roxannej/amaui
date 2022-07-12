import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTtyRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TtyRoundedW700'
      short_name='Tty'

      {...props}
    >
      <path d="M15.05 4.975Q14.5 4.975 14.125 4.587Q13.75 4.2 13.75 3.65Q13.75 3.1 14.125 2.725Q14.5 2.35 15.05 2.35Q15.6 2.35 15.988 2.725Q16.375 3.1 16.375 3.65Q16.375 4.2 15.988 4.587Q15.6 4.975 15.05 4.975ZM18.45 4.975Q17.9 4.975 17.513 4.587Q17.125 4.2 17.125 3.65Q17.125 3.1 17.513 2.725Q17.9 2.35 18.45 2.35Q19 2.35 19.375 2.725Q19.75 3.1 19.75 3.65Q19.75 4.2 19.375 4.587Q19 4.975 18.45 4.975ZM11.675 4.975Q11.125 4.975 10.75 4.587Q10.375 4.2 10.375 3.65Q10.375 3.1 10.75 2.725Q11.125 2.35 11.675 2.35Q12.225 2.35 12.6 2.725Q12.975 3.1 12.975 3.65Q12.975 4.2 12.6 4.587Q12.225 4.975 11.675 4.975ZM21.825 4.975Q21.275 4.975 20.9 4.587Q20.525 4.2 20.525 3.65Q20.525 3.1 20.9 2.725Q21.275 2.35 21.825 2.35Q22.375 2.35 22.75 2.725Q23.125 3.1 23.125 3.65Q23.125 4.2 22.75 4.587Q22.375 4.975 21.825 4.975ZM17.125 8.35Q16.575 8.35 16.2 7.975Q15.825 7.6 15.825 7.05Q15.825 6.5 16.2 6.112Q16.575 5.725 17.125 5.725Q17.675 5.725 18.062 6.112Q18.45 6.5 18.45 7.05Q18.45 7.6 18.062 7.975Q17.675 8.35 17.125 8.35ZM20.525 8.35Q19.975 8.35 19.588 7.975Q19.2 7.6 19.2 7.05Q19.2 6.5 19.588 6.112Q19.975 5.725 20.525 5.725Q21.075 5.725 21.45 6.112Q21.825 6.5 21.825 7.05Q21.825 7.6 21.45 7.975Q21.075 8.35 20.525 8.35ZM13.75 8.35Q13.2 8.35 12.825 7.975Q12.45 7.6 12.45 7.05Q12.45 6.5 12.825 6.112Q13.2 5.725 13.75 5.725Q14.3 5.725 14.675 6.112Q15.05 6.5 15.05 7.05Q15.05 7.6 14.675 7.975Q14.3 8.35 13.75 8.35ZM18.45 11.725Q17.9 11.725 17.513 11.35Q17.125 10.975 17.125 10.425Q17.125 9.875 17.513 9.5Q17.9 9.125 18.45 9.125Q19 9.125 19.375 9.5Q19.75 9.875 19.75 10.425Q19.75 10.975 19.375 11.35Q19 11.725 18.45 11.725ZM15.05 11.725Q14.5 11.725 14.125 11.35Q13.75 10.975 13.75 10.425Q13.75 9.875 14.125 9.5Q14.5 9.125 15.05 9.125Q15.6 9.125 15.988 9.5Q16.375 9.875 16.375 10.425Q16.375 10.975 15.988 11.35Q15.6 11.725 15.05 11.725ZM21.825 11.725Q21.275 11.725 20.9 11.35Q20.525 10.975 20.525 10.425Q20.525 9.875 20.9 9.5Q21.275 9.125 21.825 9.125Q22.375 9.125 22.75 9.5Q23.125 9.875 23.125 10.425Q23.125 10.975 22.75 11.35Q22.375 11.725 21.825 11.725ZM11.675 11.725Q11.125 11.725 10.75 11.35Q10.375 10.975 10.375 10.425Q10.375 9.875 10.75 9.5Q11.125 9.125 11.675 9.125Q12.225 9.125 12.6 9.5Q12.975 9.875 12.975 10.425Q12.975 10.975 12.6 11.35Q12.225 11.725 11.675 11.725ZM18.675 21.775Q15.275 21.775 12.075 20.262Q8.875 18.75 6.388 16.262Q3.9 13.775 2.388 10.575Q0.875 7.375 0.875 3.975Q0.875 3.175 1.4 2.65Q1.925 2.125 2.725 2.125H6.725Q7.65 2.125 8.238 2.575Q8.825 3.025 9.025 3.875L9.65 6.85Q9.8 7.6 9.625 8.162Q9.45 8.725 8.95 9.15L6.4 11.4Q7.25 12.75 8.438 13.938Q9.625 15.125 11 16L13.55 13.55Q14.05 13.075 14.663 12.9Q15.275 12.725 16 12.9L18.75 13.525Q19.625 13.75 20.075 14.275Q20.525 14.8 20.525 15.675V19.9Q20.525 20.7 20 21.237Q19.475 21.775 18.675 21.775ZM4.875 8.575 6.475 7.15Q6.475 7.15 6.475 7.15Q6.475 7.15 6.475 7.15L6.125 5.275Q6.125 5.275 6.125 5.275Q6.125 5.275 6.125 5.275H4.075Q4.075 5.275 4.075 5.275Q4.075 5.275 4.075 5.275Q4.15 6.125 4.338 6.95Q4.525 7.775 4.875 8.575ZM17.375 18.525Q17.375 18.525 17.375 18.525Q17.375 18.525 17.375 18.525V16.45Q17.375 16.45 17.375 16.45Q17.375 16.45 17.375 16.45L15.525 16.025Q15.525 16.025 15.525 16.025Q15.525 16.025 15.525 16.025L13.9 17.6Q14.725 17.95 15.6 18.175Q16.475 18.4 17.375 18.525ZM13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6Q13.9 17.6 13.9 17.6ZM4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Q4.875 8.575 4.875 8.575Z"/>
    </Icon>
  )
});

export default IconMaterialTtyRoundedW700;
