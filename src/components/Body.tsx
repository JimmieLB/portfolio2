
import View from "./three/view";
import Tech from "./Tech";
import About from "./About";
function Body() {
  return (
    <>
      <View/>
      <Tech/>
      <About/>
      <div className='w-[100%]'>
      </div>
      {/* <div className='m-auto w-[50%] h-[20px] mt-2 bg-primary'></div>
      <div className='m-auto w-[50%] h-[20px] mt-2 bg-secondary'></div>
      <div className='m-auto w-[50%] h-[20px] mt-2 bg-neutral'></div>
      <div className='m-auto w-[50%] h-[20px] mt-2 bg-accent'></div>
      <div className='m-auto w-[50%] h-[20px] mt-2 bg-base-100'></div> */}
    </>
  );
}

export default Body;