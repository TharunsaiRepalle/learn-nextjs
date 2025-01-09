//import axios from 'axios';
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import client from '@/db';

async function getUserDetails() {
  //explicit delay
  //await new Promise((r) => setTimeout(r,5000))

  // Approach: call an external api just like react which loses seo optimization.
  // const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  // return response.data;

  // Approach:1 this isn't best way to do to fetch the data here we are calling the nextjs backend server.
  // const response = await axios.get("http://localhost:3000/api/user");
  // return response.data;

  //Approach 2: interacting directly with database since backend and frontend lies in same place.
  const user = await client.user.findFirst();
  return {
    name: "hello",
    email : user?.username
  };

}

//async component.
export default async function Home() {
  const userDetails = await getUserDetails();
  return (
    <div className='flex flex-col justify-center h-screen'>
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            {userDetails?.name}
          </div>
          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}
