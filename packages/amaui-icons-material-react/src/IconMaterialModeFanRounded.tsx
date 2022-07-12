import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeFanRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeFanRounded'
      short_name='ModeFan'

      {...props}
    >
      <path d="M10.6 22q-1.275 0-1.937-.762Q8 20.475 8 19.5q0-.65.288-1.262.287-.613.887-1.013.55-.35.887-.9.338-.55.463-1.175l-.3-.15q-.15-.075-.275-.175l-2.3.825q-.425.15-.825.25-.4.1-.825.1-1.575 0-2.788-1.375Q2 13.25 2 10.6q0-1.275.763-1.938Q3.525 8 4.475 8q.65 0 1.275.287.625.288 1.025.888.35.55.9.887.55.338 1.175.463l.15-.3q.075-.15.175-.275l-.825-2.3q-.15-.425-.25-.825-.1-.4-.1-.8 0-1.6 1.375-2.813Q10.75 2 13.4 2q1.275 0 1.938.762.662.763.662 1.713 0 .65-.287 1.275-.288.625-.888 1.025-.55.35-.887.9-.338.55-.463 1.175l.3.15q.15.075.275.175l2.3-.85q.425-.15.813-.238Q17.55 8 17.975 8 20 8 21 9.675t1 3.725q0 1.275-.8 1.937-.8.663-1.775.663-.625 0-1.213-.288-.587-.287-.987-.887-.35-.55-.9-.887-.55-.338-1.175-.463l-.15.3q-.075.15-.175.275l.825 2.3q.15.4.25.763.1.362.1.762.025 1.625-1.35 2.875T10.6 22Zm1.4-8.5q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q12.625 10.5 12 10.5t-1.062.438Q10.5 11.375 10.5 12t.438 1.062q.437.438 1.062.438Zm-1.15-4.8q.15-.05.313-.088.162-.037.312-.062.2-1.05.763-1.95.562-.9 1.487-1.5.125-.1.2-.25Q14 4.7 14 4.475q0-.2-.15-.338Q13.7 4 13.4 4q-.95 0-2.15.412-1.2.413-1.25 1.613 0 .225.062.425.063.2.113.375ZM6 14q.35 0 .825-.175L8.7 13.15q-.05-.15-.087-.313-.038-.162-.063-.312-1.05-.2-1.95-.763-.9-.562-1.5-1.487-.1-.125-.262-.2Q4.675 10 4.475 10q-.225 0-.35.15Q4 10.3 4 10.6q0 1.35.513 2.375Q5.025 14 6 14Zm4.6 6q1.175 0 2.313-.475 1.137-.475 1.087-1.65 0-.275-.175-.7L13.15 15.3q-.15.05-.312.087-.163.038-.313.063-.2 1.05-.762 1.95-.563.9-1.488 1.5-.125.1-.213.263-.087.162-.062.337.025.2.15.35.125.15.45.15Zm8.825-6q.225 0 .4-.125Q20 13.75 20 13.4q0-.95-.4-2.163-.4-1.212-1.625-1.237-.225 0-.425.05-.2.05-.375.1l-1.875.7q.05.15.088.312.037.163.062.313 1.05.2 1.95.762.9.563 1.5 1.488.075.125.225.2.15.075.3.075Z"/>
    </Icon>
  )
});

export default IconMaterialModeFanRounded;
