import styled from 'styled-components'
// import Goal from "../lib/mongodb/goal.model"
// import { connectDB, isConnected } from "../lib/mongodb/connect"
// import { getCookie, setCookie, deleteCookie } from 'cookies-next';
// import { GetServerSideProps } from 'next'
import Link from 'next/link';
// import { useEffect } from 'react';

export default function Mongo({ data }: any) {
  return (
    <Container>
      <Link href="/">이동</Link>
      <div>테스트</div>
      {/* {
        data ? data.map((goal: any, key: any) => (
          <div key={key}><br />{goal._id} : {goal.text}</div>
        )) : null
      } */}
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

// export const getServerSideProps: GetServerSideProps = async () => {
//   const result = await Goal.find();
//   const goal = result.map((d) => {
//     const data = d.toObject();
//     data.createdAt = data.createdAt.toString();
//     data.updatedAt = data.updatedAt.toString();
//     data._id = data._id.toString();
//     return data;
//   });
//   return {
//     props: { data: goal }
//   }
// }
