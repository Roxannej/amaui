import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterHeaterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterHeaterSharpFilled'
      short_name='WaterHeater'

      {...props}
    >
      <path d="M6 22q-.825 0-1.412-.587Q4 20.825 4 20V6q0-1.65 1.175-2.825Q6.35 2 8 2h8q1.65 0 2.825 1.175Q20 4.35 20 6v14q0 .825-.587 1.413Q18.825 22 18 22Zm3-3q1.35 0 1.763-.5.412-.5 1.237-.5.825 0 1.238.5.412.5 1.762.5t1.8-.5q.45-.5 1.2-.5v-2q-1.35 0-1.8.5-.45.5-1.2.5t-1.2-.5q-.45-.5-1.8-.5t-1.762.5Q9.825 17 9 17t-1.237-.5Q7.35 16 6 16v2q.825 0 1.238.5Q7.65 19 9 19Zm3.125-4.05q1.775 0 2.775-1.063 1-1.062 1-2.337 0-.8-.35-1.562-.35-.763-1.125-1.288-.725-.5-1.162-1.125-.438-.625-.438-1.425 0-.275.038-.488.037-.212.137-.487.025-.075-.012-.125Q12.95 5 12.875 5q-.075 0-.112.012-.038.013-.138.063-1.125.5-1.738 1.462-.612.963-.612 2.313 0 .375.05.662.05.288.1.488l.125.412q.05.163.05.288 0 .125-.062.225-.063.1-.213.1-.25 0-.562-.563Q9.45 9.9 9.45 9.15q0-.125.013-.263.012-.137.037-.287 0-.075-.05-.138Q9.4 8.4 9.3 8.4q-.175 0-.312.075-.138.075-.213.2-.425.6-.587 1.212-.163.613-.163 1.188 0 1.7 1.225 2.787 1.225 1.088 2.875 1.088Zm.125-1.675q-.275 0-.612-.125-.338-.125-.538-.325.45-.075.775-.475.325-.4.325-.9 0-.2-.025-.438-.025-.237-.075-.512-.075-.4-.025-.688.05-.287.3-.512.1.275.3.525.2.25.5.5t.513.562q.212.313.212.713 0 .675-.475 1.175t-1.175.5Z"/>
    </Icon>
  )
});

export default IconMaterialWaterHeaterSharpFilled;
