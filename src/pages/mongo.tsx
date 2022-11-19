import styled from 'styled-components'
import Goal from "../lib/mongodb/goal.model"
import connectDB from "../lib/mongodb/connect"
import { useEffect } from 'react'
import Link from 'next/link';

export default function Mongo({ data }: any) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <Container>
      mongo
      <Link href="/">이동</Link>
    </Container>
  )
}

const Container = styled.div`
  width:100vw;
  min-height:100vh;
`

export async function getServerSideProps() {
  await connectDB();
  const result = await Goal.find();
  const goal = result.map((d) => {
    const data = d.toObject();
    data.createdAt = data.createdAt.toString();
    data.updatedAt = data.updatedAt.toString();
    data._id = data._id.toString();
    return data;
  });
  return {
    props: { data: goal }
  }
}
