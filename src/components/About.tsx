function Experience({ name, date, children } : {name:string, date:string, children: JSX.Element}) {
  return (
    <li className="step step-primary w-[100%]">
      <div className='m-auto'>
        <div className="w-1/1 m-auto border-b-[3px] p-2 text-2xl">{`${name} - ${date}`}</div>
        <div className="w-1/1 m-auto text-left p-2 pl-10 pr-10 text-lg">{children}</div>
      </div>
    </li>);
}

function About() {
  return (<>
    <div className="w-[60%] m-auto mt-[100px]">
      <ul className="steps steps-vertical w-[100%]">
        <Experience name="Atelier" date='2023'><>
          - Scaled backend to deal with thousands of requests a minute<br/>
          - Optimized database queries for speed by indexing<br/></>
        </Experience>
        <Experience name="Fiverr Freelancer" date='2021-2022'><>
          - Time management<br/>
          - Maintained a high 4.8 star rating for over 40 different clients<br/>
          - Maintained strong communication with electrical team<br/></>
        </Experience>
        <Experience name="FIRST Robotics Programming Team Lead" date='2017-2020'><>
          - Managed git workflow<br/>
          - Used simulations to design autonomous functions of robot<br/>
          - Maintained strong communication with clients<br/></>
        </Experience>
      </ul>
    </div>
  </>);
}

export default About;