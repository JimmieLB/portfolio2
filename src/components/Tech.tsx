

import ReactMarkdown from 'react-markdown'
function Md({children}: {children:  string}) {
  return ( <ReactMarkdown className='ml-auto mr-auto'>{children}</ReactMarkdown>);
}

function DivContainer({ name, children }: {name: string, children: string | JSX.Element | JSX.Element[]}) {
  return (
    <div className='md:w-1/2 s:w-1/1 lg:w-1/4 flex flex-col justify-items-center bg-neutral'>
      <div className='w-1/1'>
        <div className='ml-auto mr-auto text-center text-2xl text-white p-2 bg-accent'>{name}</div>
      </div>
      <div className='w-[100%] h-[100%] p-5 bg-neutral flex flex-col justify-items-center'>
        {children}
      </div>
    </div>
  )
}
function Tech() {
  return (<>
    <div className='lg:w-[60%] md:w-[70%] s:w-[80%] m-auto'>
    <div className='text-3xl m-1/1 text-left'>Here are some of the technologies that I've used:</div>
    <div className='w-1/1 flex flex-row mt-4'>
      <DivContainer name={'Frontend'}>
        <Md>![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)</Md>
        <Md>![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)</Md>
        <Md>![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)</Md>
        <Md>![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)</Md>
        <Md>![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)</Md>
        <Md>![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)</Md>
        <Md>![Threejs](https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white)</Md>
      </DivContainer>
      <DivContainer name={'Api'}>
        <Md>![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)</Md>
        <Md>![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)</Md>
        <Md>![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)</Md>
        <Md>![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)</Md>
        <Md>![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</Md>
        <Md>![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)</Md>
      </DivContainer>
      <DivContainer name={'Database'}>
        <Md>![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)</Md>
        <Md>![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)</Md>
        <Md>![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)</Md>
        <Md>![ApacheCassandra](https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white)</Md>
      </DivContainer>
      <DivContainer name={'Deployment'}>
        <Md>![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)</Md>
        <Md>![CockroachLabs](https://img.shields.io/badge/Cockroach%20Labs-6933FF?style=for-the-badge&logo=Cockroach%20Labs&logoColor=white)</Md>
        <Md>![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)</Md>
        <Md>![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)</Md>
      </DivContainer>
    </div>
    </div>
  </>);
}

export default Tech;