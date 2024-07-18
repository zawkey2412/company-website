"use client"
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";

const metadata = {
  title: "Teams",
};

const TeamPage = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json();
      setTeamData(data.results);
    } catch (error) {
      console.error("Error fetching team data:", error);
    }
  };

  const designations = ["CEO", "CTO", "Designer", "Writer"];
  
  return (
    <>
      <Breadcrumb
        pageName="Teams"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {teamData.map((teamMember, index) => {
              const designation = designations[Math.floor(Math.random() * designations.length)];
              return (
                <div
                  key={index}
                  className="w-full p-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                >
                  <div className="card">
                    <img src={teamMember.picture.large} alt="Team Member" />
                    <div className="card-body">
                      <h3>{`${teamMember.name.first} ${teamMember.name.last}`}</h3>
                      <p>{teamMember.email}</p>
                      <p>{designation}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
