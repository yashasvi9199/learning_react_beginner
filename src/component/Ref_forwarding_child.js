import React from "react";

//        function Ref_forwarding_child() {
//        return (
//            <div>
//            <input type='text' />
//            </div>
//          )
//        }

const Ref_forwarding_child = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  );
});

export default Ref_forwarding_child;
