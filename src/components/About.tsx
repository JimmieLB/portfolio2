function Experience({ name, date, children } : {name:string, date:string, children: JSX.Element}) {
  return (
      <div className='m-auto bg-transparent'>
        <div className="w-1/1 m-auto border-b-[3px] p-2 text-2xl bg-transparent">{`${name} - ${date}`}</div>
        <div className="w-1/1 m-auto text-left p-2 pl-10 pr-10 text-md bg-transparent">{children}</div>
      </div>
  );
}

function About() {
  return (<>
    <div className="w-[70%] m-auto mt-[100px] bg-neutral p-10">
        <Experience name="Software Engineer Lab Lead @ Digital Ready" date='2023'><>
          - Managed Students at a 3 month software engineering bootcamp.<br/>
          - Debugged student's python code for AI, Computer Vision, and basic python concepts.<br/>
          - Helped manage multiple hackathons and coding competitions for the students.<br/>
          - Cooperated with other lab leads to ensure student's success.
<br/></>
        </Experience>
        <Experience name="Atelier" date='2023'><>
          - Researched and used Cassandra DB database queries near constant time with millions of data points by indexing the tables, for an avg. of 4ms.<br/>
          - Utilized Artillery.js to determine which queries and database structure gave the fastest queries, helping optimize indexing to get query times from a 4ms average down to 2ms average.<br/>
          - Designed related products section of the front-end interface and refactored star rating sub-component to be used across the app in many different components which improved development efficiency. <br/>
          - Designed a functional carousel component that displayed a list of different products. <br/>
          - Maintained active communication with an agile team of 4 to ensure efficient technical and non-technical workflows.
<br/></>
        </Experience>
        <Experience name="Software Engineer Freelancer @ Fiverr" date='2021-2022'><>
          - Communicated with clients to build, maintain and debug websites, continuously integrating new features based on feedback and current needs.<br/>
          - Maintained a 4.8+ out of 5 star rating and 100% on time delivery for 40+ clients, achieving level 1 seller status.<br/></>
        </Experience>
        <Experience name="Programming Team Lead @ FIRST Robotics Team 6367" date='2017-2020'><>
          - Utilized drivetrain simulations from Wpilib to perfect the trajectory of the robot when moving autonomously, even before the robot was finished being built.<br/>
          - Coordinated with the electrical team to efficiently implement new features during the development cycles of the robots, added functionality to motors, sensors, and lights.<br/>
          - Implemented display to allow the robot pilot to view sensor data through a camera module attached to the robot.<br/>
          - Lead team to earn a trophy for getting top 3 most points during autonomous-only mode.<br/>
          - Mentored newer team members and ensured that the team was up to date on the codebase and coordinated technical and non-technical workflows.<br/></>
        </Experience>
    </div>
  </>);
}

export default About;