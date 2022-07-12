import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMuseumRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MuseumRoundedW700'
      short_name='Museum'

      {...props}
    >
      <path d="M3 22.85Q2.25 22.85 1.7 22.3Q1.15 21.75 1.15 21Q1.15 20.275 1.65 19.737Q2.15 19.2 2.925 19.15H3.15V11.85H2.9Q2.175 11.85 1.663 11.312Q1.15 10.775 1.15 9.875Q1.15 9.175 1.562 8.6Q1.975 8.025 2.7 7.5L10.2 2.25Q10.625 1.975 11.075 1.825Q11.525 1.675 12 1.675Q12.475 1.675 12.925 1.825Q13.375 1.975 13.8 2.25L21.3 7.5Q22.025 8 22.438 8.587Q22.85 9.175 22.85 9.9Q22.85 10.775 22.338 11.312Q21.825 11.85 21.1 11.85H20.85V19.15H21.075Q21.85 19.2 22.35 19.737Q22.85 20.275 22.85 21Q22.85 21.75 22.3 22.3Q21.75 22.85 21 22.85ZM6.3 19.7H12H17.7ZM9 18Q9.425 18 9.713 17.712Q10 17.425 10 17V14L10.7 15.05Q10.95 15.4 11.288 15.575Q11.625 15.75 12 15.75Q12.375 15.75 12.725 15.575Q13.075 15.4 13.3 15.05L14 14V17Q14 17.425 14.288 17.712Q14.575 18 15 18Q15.425 18 15.713 17.712Q16 17.425 16 17V12.25Q16 11.75 15.625 11.375Q15.25 11 14.725 11Q14.425 11 14.1 11.175Q13.775 11.35 13.6 11.625L12 14L10.4 11.625Q10.225 11.35 9.9 11.175Q9.575 11 9.25 11Q8.75 11 8.375 11.375Q8 11.75 8 12.25V17Q8 17.425 8.288 17.712Q8.575 18 9 18ZM17.7 19.7V8.8L12 4.825L6.3 8.8V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialMuseumRoundedW700;
