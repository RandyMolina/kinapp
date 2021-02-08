import Image from "next/image";

const Members = ({ data, error, loading }) => {
  return (
    <div className=" grid gap-4 grid-cols-3 pt-4 ">
      {data.members.map((member, index) => (
        <div className="bg-white shadow-lg " key={index}>
          <div className=" rounded-t-lg ">
            {" "}
            <Image
              className=""
              src={member.imgURL}
              alt="me"
              height="200"
              width="200"
              sizes="40vw"
            />
          </div>

          <div className="">
            {" "}
            <h1 className="text-center"> {member.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Members;
