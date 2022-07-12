import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScoreboardSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScoreboardSharpW700'
      short_name='Scoreboard'

      {...props}
    >
      <path d="M14.775 15.325V9.05H19.5V15.325ZM16.45 13.6H17.8V10.8H16.45ZM4.5 15.325V11.7H7.425V10.775H4.5V9.05H9.225V12.675H6.3V13.6H9.225V15.325ZM10.675 11.375V9.3H13.325V11.375ZM10.675 15.075V13H13.325V15.075ZM0.475 21.525V2.85H5.65V0.475H8.425V2.85H15.575V0.475H18.35V2.85H23.525V21.525ZM3.225 18.775H10.675V16.7H13.325V18.775H20.775V5.625H13.325V7.7H10.675V5.625H3.225ZM3.225 18.775V5.625Z"/>
    </Icon>
  )
});

export default IconMaterialScoreboardSharpW700;
